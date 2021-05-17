// import { NavLink } from 'react-router-dom';
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (p) => {
  let dD = p.stateDialogs.dialogsData;
  let mD = p.stateDialogs.messagesData;

  // let dD = p.dialogs;
  // let mD = p.message;

  let dialogsElements = dD.map((n) => <DialogItem name={n.name} id={n.id} />);
  let messagesElements = mD.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let dE = dialogsElements;
  let mE = messagesElements;

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dE}</div>
      <div className={s.messanges}>{mE}</div>
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
    </div>
  );
};

export default Dialogs;
