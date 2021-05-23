import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (p) => {
  let state = p.dialogsPage;
  let dD = state.dialogsData;
  let mD = state.messagesData;
  let nM = state.newMessageBody;
  // let dD = p.dialogs;
  // let mD = p.message;
  let dialogsElements = dD.map((n) => (
    <DialogItem name={n.name} id={n.id} key={n.id} />
  ));
  let messagesElements = mD.map((m) => (
    <Message message={m.message} id={m.id} key={m.id} />
  ));

  let dE = dialogsElements;
  let mE = messagesElements;

  let onSendMessageClick = () => {
    p.sendMessageCreator();
  };

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    p.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dE}</div>
      <div className={s.messanges}>{mE}</div>
      <div>
        <div>
          <textarea
            onChange={onNewMessageChange}
            placeholder="Enter your message"
            value={nM}
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send post</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
