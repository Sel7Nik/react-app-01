import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://c.pxhere.com/photos/b5/66/landscape_mountain_mountain_range_nature_panoramic-953573.jpg!s"
          alt="img"
        />
      </div>

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="large" />
        <ProfileStatus status={'Hello my dear girl'} />
      </div>
    </div>
  );
};

export default ProfileInfo;
