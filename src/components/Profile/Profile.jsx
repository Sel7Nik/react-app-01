import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  debugger;
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
