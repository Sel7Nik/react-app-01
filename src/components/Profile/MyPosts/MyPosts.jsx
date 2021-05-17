import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (p) => {
  let pD = p.myposts;

  let postsElement = pD.map((m) => (
    <Post message={m.message} likeCount={m.likeCount} />
  ));

  let pE = postsElement;

  return (
    <>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        {pE}
      </div>
    </>
  );
};

export default MyPosts;
