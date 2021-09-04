import { InjectedFormProps, reduxForm } from 'redux-form';
import { createField, Textarea } from '../../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';


const maxLength50 = maxLengthCreator(50);
type NewMessageFormValuesType = {
  newMessageBody: string
}
type NewMessageFormValuesTypeKeys = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType> & PropsType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {createField<NewMessageFormValuesTypeKeys>('Enter your message', 'newMessageBody', [required, maxLength50], Textarea)}
        {/* <Field
          component={Textarea}
          validate={[required, maxLength50]}
          placeholder="Enter your message"
          name="newMessageBody"
        ></Field> */}
      </div>
      <div>
        <button>SEND MESSAGE</button>
      </div>
    </form>
  );
};
export default reduxForm<NewMessageFormValuesType>({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);
