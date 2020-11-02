import React, { useEffect, useState } from 'react';
import {
  FirebaseRDB,
  FirebaseStorage,
} from '@/config/firebase.config';

import { UserObj } from '@/components/util/usertype';
import { ChatObj } from '../type';

import ReceivePresenter from './ReceivePresenter';

interface SendProps {
  userObj: UserObj | null;
}

const ReceiveContainer = ({
  userObj,
  ...props
}: SendProps): JSX.Element => {
  /**
   * 내가 받은 리스트
   */
  const [receiveList, setList] = useState<Array<ChatObj>>(
    [],
  );

  const [imgList, setImg] = useState([]);
  const [isLoading, setLoading] = useState(true);

  /**
   * 리스트 가져오기
   */
  useEffect(() => {
    let list: any = [...receiveList];
    let img: any = [];
    FirebaseRDB.ref(`chat`).on(
      'value',
      (snap: firebase.database.DataSnapshot) => {
        let key: any;
        for (key in snap.val()) {
          if (snap.val()[key].receiver === userObj?.email) {
            const obj = {
              ...snap.val()[key],
              enable: snap.val()[key].receiverOk !== 0,
            };
            list = [...list, obj];

            /**
             * 상대에 해당하는 사진 가져오기
             */
            // FirebaseStorage.ref(`hands/${snap.val()[key].sender}/0.jpg`)
            FirebaseStorage.ref(`hands/${obj.email}/0.jpg`)
              .getDownloadURL()
              .then((uri: any) => {
                img = [...img, uri];
              })
              .then(() => setImg(img));
          }
        }

        setList(list);
        setTimeout(() => {
          setLoading(false);
        }, 100);
      },
    );
  }, []);

  return (
    <ReceivePresenter
      receiveList={receiveList}
      isLoading={isLoading}
      userObj={userObj}
      img={imgList}
      {...props}
    />
  );
};
export default ReceiveContainer;
