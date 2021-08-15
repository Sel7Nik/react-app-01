// import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
  let dialogsState = props.dialogsPage;
  let dD = dialogsState.dialogsData;
  let mD = dialogsState.messagesData;

  let dialogsElements = dD.map((n) => (
    <DialogItem name={n.name} key={n.id} id={n.id} />
  ));
  let messagesElements = mD.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));

  const addNewMessage = (value) => {
    props.sendMessage(value.newMessageBody);
  };

  if (!props.isAuth) return <Redirect to={'/login'} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messanges}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          placeholder="Enter your message"
          name="newMessageBody"
        ></Field>
      </div>
      <div>
        <button>SEND MESSAGE</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(
  AddMessageForm
);
export default Dialogs;
