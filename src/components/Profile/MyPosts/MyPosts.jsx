import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
    { id: 2, message: 'It is my first post', likeCount: '0' },
    { id: 3, message: 'It is my second post', likeCount: '32' },
    { id: 4, message: 'It is my eleven post', likeCount: '99' },
  ];

  let pD = postsData;

  let postsElement = pD.map((m) => (
    <Post name="Nik" age="33" message={m.message} likeCount={m.likeCount} />
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
