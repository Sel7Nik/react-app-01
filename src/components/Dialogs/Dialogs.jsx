// import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
  debugger;
  let dialogsState = props.store._state.dialogsPage;
  let dD = dialogsState.dialogsData;
  let mD = dialogsState.messagesData;
  let newMessageBody = dialogsState.newMessageBody;

  let dialogsElements = dD.map((n) => <DialogItem name={n.name} id={n.id} />);
  let messagesElements = mD.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  const sendMessage = () => {
    props.store.dispatch(sendMessageCreator());
  };
  const onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messanges}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            placeholder="Enter your message"
            value={newMessageBody}
          ></textarea>
        </div>
        <div>
          <button onClick={sendMessage}>SEND MESSAGE</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
