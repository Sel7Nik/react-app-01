const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsDataType = {
  id: number 
  name:string
}

type MessagesDataType ={
  id: number 
  message: string
}
export type InitialStateType = typeof initialState

let initialState = {
  dialogsData: [
    { id: 1, name: 'DimDimitch' },
    { id: 2, name: 'DimVovich' },
  ]as Array<DialogsDataType>,
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
  ]as Array<MessagesDataType>,
};




const dialogsReducer = (state = initialState, action: any):InitialStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: 6, message: body }],
      };
    }

    default:
      return state;
  }
};
type sendMessageCreatorType={
  type: typeof SEND_MESSAGE,
  newMessageBody: string
}

export const sendMessageCreator = (newMessageBody: string):sendMessageCreatorType => ({
  type: SEND_MESSAGE,
  newMessageBody,
});
export default dialogsReducer;
