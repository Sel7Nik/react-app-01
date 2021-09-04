// import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
// import { Redirect } from 'react-router-dom';
import { InitialStateType } from '../../redux/dialogs-reducer';
import AddMessageForm from './AddMessageForm/AddMessageForm';


type PropsType = {
  dialogsPage: InitialStateType
  sendMessage: (messageText: string) => void
}

export type NewMessageFormType = {
  newMessageBody: string
}



const Dialogs: React.FC<PropsType> = (props) => {
  let dialogsState = props.dialogsPage;
  let dD = dialogsState.dialogsData;
  let mD = dialogsState.messagesData;

  let dialogsElements = dD.map((n) => (
    <DialogItem name={n.name} key={n.id} id={n.id} />
  ));
  let messagesElements = mD.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));


  const addNewMessage = (value: { newMessageBody: string }) => {
    props.sendMessage(value.newMessageBody);
  };

  // if (!props.isAuth) return <Redirect to={'/login'} />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messanges}>{messagesElements}</div>
      <AddMessageForm onSubmit={addNewMessage} />
    </div>
  );
};

export default Dialogs;
