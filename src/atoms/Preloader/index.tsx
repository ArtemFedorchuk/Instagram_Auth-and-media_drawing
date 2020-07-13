import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Preloader = () => {
  return (
    <>
      <div className={styles.preloader}>
        Loading...
      </div>
      <Link to='/' className={styles.btnInst}>
        <button className={styles.preloaderBtn}>Sign Up instagram</button>
      </Link>
    </>
  )
};

export default Preloader;