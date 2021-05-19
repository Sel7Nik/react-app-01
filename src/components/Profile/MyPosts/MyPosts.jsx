import React from 'react';
import Post from './Post/Post.jsx';
import s from './MyPosts.module.css';

const MyPosts = (p) => {
  let pD = p.posts;

  let postsElement = pD.map((m) => (
    <Post message={m.message} likeCount={m.likeCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    p.addPost(text);
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    p.updateNewPostText(text);
  };
  return (
    <>
      <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={p.newPostText}
          />
          <button onClick={addPost}>Add post</button>
        </div>
        {postsElement}
      </div>
    </>
  );
};

export default MyPosts;
