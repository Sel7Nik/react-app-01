import React from 'react';
import { updateNewMessageBodyCreator } from '../../redux/dialogs.reduser.js';
import { sendMessageCreator } from '../../redux/dialogs.reduser.js';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: () => {
      dispatch(sendMessageCreator());
    },
    sendMessageCreator: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
