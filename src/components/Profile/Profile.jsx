import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
// import { updateNewPostText } from '../../render.js';
// import s from './Profile.module.css';

const Profile = (p) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={p.store} />
    </div>
  );
};

export default Profile;
