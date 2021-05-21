// import { NavLink } from 'react-router-dom';
import React from 'react';

import { updateNewMessageBodyCreator } from '../../redux/dialogs.reduser.js';
import { sendMessageCreator } from '../../redux/dialogs.reduser.js';
import Dialogs from './Dialogs';

const DialogsContainer = (p) => {
  let state = p.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    p.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (body) => {
    p.store.dispatch(updateNewMessageBodyCreator(body));
  };
  return (
    <Dialogs
      updateNewMessageBody={onNewMessageChange}
      sendMessageCreator={onSendMessageClick}
      dialogsPage={state}
    />
  );
};

export default DialogsContainer;
