import React from 'react';
import { updateNewMessageBodyCreator } from '../../redux/dialogs.reduser.js';
import { sendMessageCreator } from '../../redux/dialogs.reduser.js';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext.js';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        let onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessageCreator={onSendMessageClick}
            dialogsPage={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
