import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../images/avatar-anonymous-face.png';
import css from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={css.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt="large"
          className={css.mainPhoto}
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
