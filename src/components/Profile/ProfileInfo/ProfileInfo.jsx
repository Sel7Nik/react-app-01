import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../../components/common/preloader/preloader';

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
        <img src={props.profile.photos.large} alt="img" />

        <h3>{props.profile.fullName}</h3>
        <h4>{props.profile.aboutMe}</h4>
      </div>
    </div>
  );
};

export default ProfileInfo;
