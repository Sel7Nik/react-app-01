const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogsData: [
    { id: 1, name: 'DimDimitch' },
    { id: 2, name: 'DimVovich' },
    { id: 3, name: 'NikSanytch' },
    { id: 4, name: 'OlegSanytch' },
    { id: 5, name: 'PetrSanytch' },
    { id: 6, name: 'Olegovich' },
  ],

  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'How are you' },
    { id: 4, message: 'I am fine' },
    { id: 5, message: 'I am fine too' },
  ],
  newMessageBody: 'new Message Body',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
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
