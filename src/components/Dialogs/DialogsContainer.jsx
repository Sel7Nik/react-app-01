import Dialogs from './Dialogs';
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext.js';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let dialogsState = store.getState().dialogsPage;

        const onSendMessageClick = () => {
          store.dispatch(sendMessageCreator());
        };

        const onNewMessageChange = (body) => {
          store.dispatch(updateNewMessageBodyCreator(body));
        };
        return (
          <Dialogs
            dialogsPage={dialogsState}
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default DialogsContainer;
