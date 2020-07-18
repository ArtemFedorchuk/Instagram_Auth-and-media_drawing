import React, {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import { constants } from '../../constants'
import { getAuthInstagramUrl } from '../../API';

const SignUp = ( props ) => {
  const [ intUrl, setInstUrl ] = useState ('');

  if(constants.testUrl && constants.testUrl.length === 2) {
  }

    useEffect( () => {
      getAuthInstagramUrl()
        .then((url => setInstUrl(url)))
    });

  const urlHandler =() => {
    return document.location.href = `${intUrl}`
  };

  return (
   <div className={styles.wrapper}>
     <div className={styles.wrapperForm}>
       <h3 className={styles.formTitle}>Sign Up Instagram</h3>
       <br/><br/>
       <button
         className={styles.btnInst}
         onClick={urlHandler}
       >
         auth
       </button>
     </div>
   </div>
  )
};

export default SignUp;
