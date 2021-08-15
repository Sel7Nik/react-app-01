import React from 'react';
import Post from './Post/Post.jsx';
import css from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  let postsElement = props.postsData.map((data) => (
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

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newPostText" />
        <button>Add post</button>
      </div>
    </form>
  );
};
let AddNewPostFormRedux = reduxForm({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
);

export default MyPosts;
