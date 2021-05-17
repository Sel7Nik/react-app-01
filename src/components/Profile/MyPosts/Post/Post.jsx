import React from 'react';

import s from './Post.module.css';
const Post = (p) => {
  return (
    <div className={s.posts}>
      <div className={s.avatar}>
        <img
          className={s.img}
          src="https://st.depositphotos.com/2101611/4338/v/380/depositphotos_43381251-stock-illustration-silhouette-of-anonymous-man-with.jpg"
          alt=""
        />
      </div>
      <div className={s.item}>
        {p.message} '<br />' нравится {p.likeCount}
      </div>
    </div>
  );
};

export default Post;
