import React from 'react';
import styles from './styles.module.scss';

interface IMediaData{
  id: any
  media_type?: string
  media_url: string
  timestamp?: string
  caption?: string
  permalink: string
}

interface IArrMediaData {
  items: IMediaData[]
}

const MediaElement: React.FC<IArrMediaData> = ({ items }) => {

  return (
    <>
      {items &&
        Object.values(items).map((item, ident) => {
          const { id, media_type, media_url, timestamp, caption, permalink }: IMediaData = item;
          return (
            <div key={`${ident}${id}`} className={styles.contentInfoWrap}>
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
      }
      </>
  )
};

export default MediaElement;