import React from 'react';

const Profile = () => {
  return (
    <section className="content">
      <img
        className="content__img"
        src="https://c.pxhere.com/photos/b5/66/landscape_mountain_mountain_range_nature_panoramic-953573.jpg!s"
        alt="img"
      />
      <div className="content__avatar">Avatar</div>
      <div className="content__description">description</div>
      <div className="content__posts">
        My posts
        <div className="content__posts-item">
          <div className="post-item">post 1</div>
          <div className="post-item">post 2</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
