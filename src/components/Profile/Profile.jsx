import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
// import { updateNewPostText } from '../../render.js';
// import s from './Profile.module.css';

const Profile = (p) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={p.stateProfilePage.postsData}
        newPostText={p.stateProfilePage.newPostText}
        updateNewPostText={p.updateNewPostText}
        addPost={p.addPost}
      />
    </div>
  );
};

export default Profile;
