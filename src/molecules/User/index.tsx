import React from 'react';
import styles from '../SignUp/styles.module.scss';
import { Link } from 'react-router-dom';

const Post = () => {

  return (
    <div>
      <h1>Post page</h1>
      <button
      >
        Test
      </button>
      <Link to='/' className={styles.btnInst}>Auth</Link>
      <hr/>
      <Link to='/redirect' className={styles.btnInst}>Redirect</Link>
    </div>
  )
};

export default Post;