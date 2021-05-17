// import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (p) => {
  let dD = p.dialogs;
  let mD = p.message;

  let dialogsElements = dD.map((n) => <DialogItem name={n.name} id={n.id} />);
  let messagesElements = mD.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let dE = dialogsElements;
  let mE = messagesElements;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dE}</div>
      <div className={s.messanges}>{mE}</div>
    </div>
  );
};

export default Dialogs;
