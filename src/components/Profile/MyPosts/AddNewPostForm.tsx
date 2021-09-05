import { InjectedFormProps, reduxForm } from 'redux-form';
import { required } from '../../../utils/validators/validators';
import { createField, Textarea } from '../../common/FormsControls/FormsControls';



export type AddNewPostFormValuesType = {
  newPostText: string
}
type GetStringKeys<T> = Extract<keyof T, string> // для сокращения записи ниже
// type AddNewPostFormValuesTypeKeys = Extract<keyof AddNewPostFormValuesType, string>
type AddNewPostFormValuesTypeKeys = GetStringKeys<AddNewPostFormValuesType>

type PropsType = {}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormValuesType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<AddNewPostFormValuesTypeKeys>('Post message', 'newPostText', [required], Textarea)}
      </div>
    </form>
  );
};
export default reduxForm<AddNewPostFormValuesType>({ form: 'ProfileAddNewPostForm' })(
  AddNewPostForm
);
