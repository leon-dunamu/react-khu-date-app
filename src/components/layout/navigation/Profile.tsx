/**
 * @description 사이드 바의 프로필 부분
 */

import { UserObj } from '@/components/util/usertype';
import React, { memo } from 'react';
import * as s from './Navigation.styled';

interface ProfileProps {
  userObj: UserObj | null;
  logOut: () => Promise<void>;
}

const Profile = ({ userObj, logOut }: ProfileProps) => (
  <s.Profile>
    <s.UserImageContainer>
      <img
        src=""
        alt="profile-img"
        width="100%"
        height="100%"
      />
    </s.UserImageContainer>
    <s.UserInfoContainer>
      <s.UserGroup>단과대학</s.UserGroup>
      <s.UserName>{userObj?.name}</s.UserName>
    </s.UserInfoContainer>
    <s.SignOut onClick={logOut}>로그아웃</s.SignOut>
  </s.Profile>
);

export default memo(Profile);
