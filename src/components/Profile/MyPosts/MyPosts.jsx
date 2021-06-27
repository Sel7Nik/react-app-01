import React from 'react';
import Post from './Post/Post.jsx';
import css from './MyPosts.module.css';

const MyPosts = (props) => {
  let postsElement = props.postsData.map((data) => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  let addPost = () => {
    let text = document.getElementById('inputNewPost').value;
    props.addPost(text);
  };

  let onPostChange = () => {};

  return (
    <>
      <div className={css.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea
            onChange="onPostChange"
            id="inputNewPost"
            value={props.newPostText}
          />
          <button onClick={addPost}>Add post</button>
        </div>
        {postsElement}
      </div>
    </>
  );
};

export default MyPosts;
