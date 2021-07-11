import React from 'react';
import MyPosts from './MyPosts';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      postsData={state.postsData}
      newPostText={state.newPostText}
    />
  );
};

export default MyPostsContainer;
