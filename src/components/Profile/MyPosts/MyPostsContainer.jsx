import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile.reduser.js';
import MyPosts from './MyPosts';

const MyPostsContainer = (p) => {
  let state = p.store.getState();

  let addPost = () => {
    let action = addPostActionCreator();
    p.store.dispatch(action);
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    p.store.dispatch(action);
  };
  return (
    <>
      <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.postsData}
        newPostText={state.profilePage.newPostText}
      />
    </>
  );
};

export default MyPostsContainer;
