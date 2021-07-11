import Dialogs from './Dialogs';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {
  let dialogsState = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };
  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <Dialogs
      dialogsPage={dialogsState}
      updateNewMessageBody={onNewMessageChange}
      sendMessage={onSendMessageClick}
    />
  );
};

export default DialogsContainer;
