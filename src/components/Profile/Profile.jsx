import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
const Profile = () => {
  return (
    <section className={s.content}>
      <img
        className={s.img}
        src="https://c.pxhere.com/photos/b5/66/landscape_mountain_mountain_range_nature_panoramic-953573.jpg!s"
        alt="img"
      />
      <div className={s.description}>description</div>
      <MyPosts />
    </section>
  );
};

export default Profile;
