import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';
const MyPosts = () => {
  return (
    <>
      <div className={s.content}>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post name="Nik" age="33" message="Hi, how are you" />
          <Post name="Pik" age="44" message="It's my first post" />
          <Post name="Sip" age="22" message="" />
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
