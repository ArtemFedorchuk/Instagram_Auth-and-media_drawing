import React from 'react';
import styles from '../../molecules/Redirect/styles.module.scss';

const MediaElement = ({item}) => {
  interface IProfileDataItem{
    id: string
    media_type?: string
    media_url: string
    timestamp?: string
    caption?: string
    permalink: string
  }

  const { id, media_type, media_url, timestamp, caption, permalink }: IProfileDataItem = item;

  return (
    <div key={`${id}${timestamp}`} className={styles.contentInfoWrap}>
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
};

export default MediaElement;