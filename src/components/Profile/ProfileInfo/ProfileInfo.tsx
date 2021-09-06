import React, { ChangeEvent, useState } from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from '../../../images/avatar-anonymous-face.png';
import ProfileDataForm from './ProfileDataForm';
import { ContactsType, ProfileType } from '../../../types/type';

type PropsProfileInfoType = {
  profile: ProfileType | null
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (files: File) => void
  saveProfile: (profile: ProfileType) => Promise<any>
}


const ProfileInfo: React.FC<PropsProfileInfoType> = ({
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
  const onMainPhotoSelected = (even: ChangeEvent<HTMLInputElement>) => {
    if (even.target.files?.length) savePhoto(even.target.files[0])

  };

  const onSubmit = (formData: ProfileType) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
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

        {editMode ?
          <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile} />
          :
          <ProfileData goToEditMode={() => setEditMode(true)} profile={profile} isOwner={false} />
        }

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

type PropsProfileDataType = {
  profile: ProfileType
  isOwner: boolean
  goToEditMode: () => void
}

const ProfileData: React.FC<PropsProfileDataType> = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && (
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
              contactValue={profile.contacts[key as keyof ContactsType]}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

const Contact: React.FC<ContactPropsType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={css.contact}>
      <b>{contactTitle} :</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;
