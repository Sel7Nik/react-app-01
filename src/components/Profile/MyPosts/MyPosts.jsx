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
          <Post name="Nik" age="33" message="Hi, how are you" likeCount="23" />
          <Post
            name="Pik"
            age="44"
            message="It's my first post"
            likeCount="0"
          />
          <Post name="Sip" age="22" message="" likeCount="32" />
          <Post likeCount="99" />
          <Post likeCount="7" />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
