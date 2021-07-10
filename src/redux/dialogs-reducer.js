const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogsData: [
    { id: 1, name: 'DimDimitch' },
    { id: 2, name: 'DimVovich' },
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
  ],
  newMessageBody: 'new Message Body',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      let newMessagesData = { id: 3, message: body };
      state.messagesData.push(newMessagesData);
      state.newMessageBody = '';
      return state;
    }

    case UPDATE_NEW_MESSAGE_BODY: {
      state.newMessageBody = action.body;
      return state;
    }
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
