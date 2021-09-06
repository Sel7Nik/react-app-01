import React from 'react';
import css from './Post.module.css';

type PropsType = {
  message: string
  likesCount: number
}

const Post: React.FC<PropsType> = (props) => {
  return (
    <div className={css.posts}>
      <div className={css.avatar}>
        <img
          className={css.img}
          src="https://forum.gamer.com.tr/data/avatars/o/10407/10407160.jpg?1437290268"
          alt=""
        />
      </div>
      <div className={css.item}>
        {props.message} '<br />' нравится {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
