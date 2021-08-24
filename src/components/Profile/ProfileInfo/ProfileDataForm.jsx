import { reduxForm } from 'redux-form';
import {
  createField,
  Input,
  Textarea,
} from '../../common/FormsControls/FormsControls';
import css from './ProfileInfo.module.css';

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      ---
      <div>
        <b>Имя :</b>: {createField('Имя ', 'fullName', [], Input)}
      </div>
      ---
      <div>
        <b>Ищу работу</b>:
        {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </div>
      ---
      <div>
        <b>Чем занимаюсь</b>:
        {createField(
          'Чем занимаюсь',
          'lookingForAJobDescription',
          [],
          Textarea
        )}
      </div>
      ---
      <div>
        <b>О себе...</b>:{createField('О себе...', 'aboutMe', [], Input)}
      </div>
      ---
      <div>
        <b>Контакты :</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div className={css.contact}>
              <b>{key} :</b> {createField(key, 'contacts.' + key, [], Input)}
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
