import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (p) => {
  let pD = p.posts;

  let postsElement = pD.map((m) => (
    <Post message={m.message} likeCount={m.likeCount} />
  ));

  return (
    <>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        {postsElement}
      </div>
    </>
  );
};

export default MyPosts;
