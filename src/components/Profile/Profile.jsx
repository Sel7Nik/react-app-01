import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import s from './Profile.module.css';

const Profile = (p) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={p.stateProfile.postsData} />
    </div>
  );
};

export default Profile;
