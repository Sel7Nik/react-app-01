import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../images/avatar-anonymous-face.png';
import css from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (even) => {
    if (even.target.files.length) {
      savePhoto(even.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData);
    setEditMode(false);
  };
  return (
    <div>
      <div className={css.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt="large"
          className={css.mainPhoto}
        />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            onSubmit={onSubmit}
            isOwner={isOwner}
            profile={profile}
          />
        ) : (
          <ProfileData
            goToEditMode={() => setEditMode(true)}
            profile={profile}
          />
        )}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {!isOwner && (
        <div>
          <button onClick={goToEditMode}>edit</button>
        </div>
      )}
      <div>
        <b>Имя :</b>: {profile.fullName}
      </div>
      <div>
        <b>Ищу работу</b>: {profile.lookingForAJob ? 'Да' : 'Нет'}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Чем занимаюсь</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>О себе...</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Контакты :</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              contactTitle={key}
              contactValue={profile.contacts[key]}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={css.contact}>
      <b>{contactTitle} :</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
