import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';
const MyPosts = () => {
  return (
    <>
      <div className={s.posts}>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default MyPosts;
