import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import css from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div>
        <img
          className={css.img}
          src="https://c.pxhere.com/photos/b5/66/landscape_mountain_mountain_range_nature_panoramic-953573.jpg!s"
          alt="img"
        />
      </div>

      <div className={css.descriptionBlock}>
        <img src={props.profile.photos.large} alt="large" />
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
