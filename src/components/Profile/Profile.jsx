import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        // postsData={props.profilePage.postsData}
        // newPostText={props.profilePage.newPostText}
        // dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
