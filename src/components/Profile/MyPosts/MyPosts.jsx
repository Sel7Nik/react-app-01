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

  return (
    <>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>

        <div className={s.posts}>
          <Post
            name="Nik"
            age="33"
            message={pD[0].message}
            likeCount={pD[0].likeCount}
          />
          <Post
            name="Pik"
            age="44"
            message={pD[1].message}
            likeCount={pD[1].likeCount}
          />
          <Post
            name="Sip"
            age="22"
            message={pD[2].message}
            likeCount={pD[2].likeCount}
          />
          <Post
            name="Helen"
            age="21"
            message={pD[3].message}
            likeCount={pD[3].likeCount}
          />
        </div>
      </div>
    </>
  );
};

export default MyPosts;
