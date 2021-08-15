const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'DimDimitch' },
    { id: 2, name: 'DimVovich' },
  ],
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
  ],
  // newMessageBody: 'new Message Body',
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        // newMessageBody: '',
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    }

    default:
      return state;
  }
};
export const sendMessageCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
export default dialogsReducer;
