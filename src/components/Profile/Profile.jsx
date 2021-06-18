import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state.postsData} />
    </div>
  );
};

export default Profile;
