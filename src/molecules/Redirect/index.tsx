import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { constants } from '../../constants'
import { Preloader } from '../../atoms'

const Profile = () => {
  const [ userData, setUserData ]: any = useState(null);
  const [ userInfo, setUserInfo ]: any = useState(null);
  const [ profileInfo, setProfileInfo ]: any = useState(null);

  const dataArr = [];
  const userDataArr = [];
  const profileData = [];

  if(userData){
    const { access_token: token, user_id: idUs } = userData;
    dataArr.push(token, idUs);
  }
  if(userInfo){
    const { username: name, id: idUs } = userInfo;
    userDataArr.push(name, idUs);
  }
  if(profileInfo){
    profileData.push(profileInfo);
  }

  const [ userToken, userId ] = dataArr;
  const [ userName, idUser ] = userDataArr;

  useEffect(() => {
      let userUrl = document.location.href.match(/.*code=(.*)#_/);
      if(userUrl && userUrl.length === 2){}

      const body = new FormData();
        body.append("client_id", `${constants.idInst}`);
        body.append("client_secret", constants.secretInstAPI);
        body.append("grant_type", "authorization_code");
        body.append("redirect_uri", constants.redirectUri);
        body.append("code",  userUrl && userUrl.length === 2 ?  userUrl[1]: '');

      fetch("https://api.instagram.com/oauth/access_token", {
        body,
        mode: 'cors',
        method: 'POST'
      })
        .then((response) => {
          return response.json();
        }).then((result) => {
          setUserData(result);
          return
        });
  },[]);

  useEffect(() => {
    if(userId && userToken !== undefined){
      fetch(`https://graph.instagram.com/${userId}?fields=id,username&access_token=${userToken}`, {
        mode: 'cors',
        method: 'GET',
      })
        .then((response) => {
          return response.json()
        }).then((result) => {
        setUserInfo(result)
      });
    }
  },[userId, userToken]);

  useEffect(() => {
    if(idUser && userToken !== undefined) {
      fetch(`https://graph.instagram.com/${idUser}/media?fields=id,media_type,media_url,caption,permalink,timestamp&access_token=${userToken}`, {
        mode: 'cors',
        method: 'GET',
      })
        .then((response) => {
          return response.json()
        }).then((result) => {
        setProfileInfo(result)
      });
    }
  },[idUser, userToken]);

  return (
    <div className={styles.wrapper}>
      {profileInfo ? (
        <div key={4}>
          <div className={styles.wrapperContent}>
            <h2 className={styles.contentTitle}>{userName}</h2>
            {
              profileData.map((items) => {
                return Object.values(items).map((item) => {
                  return Object.values(item).map((i) => {
                    const { id, media_type, media_url, timestamp, caption, permalink } = i;
                    return (
                      <div key={id} className={styles.contentInfoWrap}>
                        {media_type !== 'VIDEO' ? (
                          <>
                            <a href={permalink}>
                              <img
                                className={styles.profileImg}
                                src={media_url}
                                alt={media_type}
                              />
                            </a>
                            <div className={styles.photoInfo}>
                              <div className={styles.like}>{caption}</div>
                              <div>{timestamp}</div>
                            </div>
                          </>
                        ): false }
                      </div>
                    )
                  })
                })
              })
            }
            <div className={styles.wrapperBtn}>
              <Link to='/' className={styles.btnInst}>
                <button className={styles.btn}>Close profile</button>
              </Link>
            </div>
          </div>
        </div>
      ): (
        <div className={styles.preloaderContent}>
          <Preloader/>
        </div>
      )}
    </div>
  )
};

export default Profile;