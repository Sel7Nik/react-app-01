import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../images/avatar-anonymous-face.png';
import css from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (even) => {
    if (even.target.files.length) {
      savePhoto(even.target.files[0]);
    }
  };
  return (
    <div>
      <div className={css.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt="large"
          className={css.mainPhoto}
        />
        {!isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
