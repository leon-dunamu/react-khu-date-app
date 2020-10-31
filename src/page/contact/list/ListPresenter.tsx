/**
 * @description 이성목록 출력
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { ListProps } from '../type';

import Loading from '@/components/util/loading';

import * as s from './List.styled';
import { color } from '@/theme/color';

const ListPresenter = ({
  userObj,
  opponent,
  isLoading,
}: ListProps): JSX.Element => (
  <div>
    {isLoading ? (
      <Loading />
    ) : (
      <div>
        <s.ListContainer>
          {opponent?.map((person, idx) => (
            <s.ListItem
              key={person.email}
              delay={idx}
              bgUri={
                'https://1seok2.github.io/CSS-exercises/assets/tranditional/beauty-1822519_640.jpg'
              }
            >
              <Link
                to={{
                  pathname: '/contact/detail',
                  state: {
                    person: person,
                    userObj: userObj,
                  },
                }}
                style={styles.link}
              >
                <div
                  style={{
                    textAlign: 'right',
                    height: '10%',
                  }}
                >
                  <i
                    className="icon-heart"
                    style={{ color: color.date }}
                  />
                </div>
                <div style={styles.desc}>
                  <s.Group>단과대</s.Group>
                  <s.NickName>닉네임</s.NickName>
                </div>
              </Link>
            </s.ListItem>
          ))}
        </s.ListContainer>
      </div>
    )}
  </div>
);

export default ListPresenter;

const styles = {
  link: {
    display: 'block',
    width: '100%',
    height: '100%',
  },
  heart: {
    textAlign: 'right',
    height: '10%',
  },
  desc: {
    height: '25%',
    marginTop: '59%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '3%',
    borderRadius: 6,
  },
};

/*


        <s.ListContainer>
          {opponent?.map(person => (
            <s.ListItem key={person.email}>
              <Link
                to={{
                  pathname: '/contact/detail',
                  state: {
                    person: person,
                    userObj: userObj,
                  },
                }}
              >
                <i
                  className="icon-heart"
                  style={{ color: color.date }}
                />
                <div style={{ alignSelf: 'flex-start' }}>
                  <s.Group>단과대</s.Group>
                  <s.NickName>닉네임</s.NickName>
                </div>
                <s.HandImage>
                  <img
                    style={{ zIndex: 1 }}
                    src="https://1seok2.github.io/CSS-exercises/assets/tranditional/dancer-1807516_640.jpg"
                    alt={`${person.nickname}-hand`}
                    width="100%"
                    height="100%"
                  />
                </s.HandImage>
              </Link>
            </s.ListItem>
          ))}
        </s.ListContainer>

*/
