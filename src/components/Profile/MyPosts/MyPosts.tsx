import React from 'react';
import Post from './Post/Post.jsx';
import css from './MyPosts.module.css';
import AddNewPostFormRedux from './AddNewPostForm';

const MyPosts = (props) => {
  console.log('RENDER');

  let postsElement = [...props.postsData]
    .reverse()
    .map((data) => (
      <Post message={data.message} likeCount={data.likeCount} key={data.id} />
    ));

  let onAddPost = (value) => {
    props.addPost(value.newPostText);
  };

  return (
    <>
      <div className={css.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={css.posts}>{postsElement}</div>
      </div>
    </>
  );
};



export default MyPosts;
