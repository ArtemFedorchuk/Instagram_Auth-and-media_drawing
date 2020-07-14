import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../../constants'
import { Preloader, MediaElement } from '../../atoms'
import styles from './styles.module.scss';

const Profile: React.FC = () => {
  interface IProfileDataItem{
    id: string
    media_type?: string
    media_url: string
    timestamp?: string
    caption?: string
    permalink: string
  }

  const [ userData, setUserData ]: Array<any> = useState(null);
  const [ userInfo, setUserInfo ]: Array<any> = useState(null);
  const [ profileInfo, setProfileInfo ]: Array<any> = useState(null);

  const dataArr: Array<object> = [];
  const userDataArr: Array<object> = [];
  const profileData: Array<object> = [];

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
        <div>
          <div className={styles.wrapperContent}>
            <h2 className={styles.contentTitle}>{userName}</h2>
            {
              profileData.map((items) => {
                return Object.values(items).map((item: IProfileDataItem) => {
                  return (
                    <MediaElement item={item} />
                  )
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