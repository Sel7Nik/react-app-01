import React from 'react';

import s from './Post.module.css';
const Post = (p) => {
  return (
    <div className={s.posts}>
      <div className={s.avatar}>
        <img
          className={s.img}
          src="https://forum.gamer.com.tr/data/avatars/o/10407/10407160.jpg?1437290268"
          alt=""
        />
      </div>
      <div className={s.item}>
        {p.name}, {p.age} '<br />' {p.message}
      </div>
    </div>
  );
};

export default Post;
