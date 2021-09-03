import {InferActionsTypes} from "./redux-store";

type DialogsDataType = {
  id: number 
  name:string
}

type MessagesDataType ={
  id: number 
  message: string
}

let initialState = {
  dialogsData: [
    { id: 1, name: 'DimDimitch' },
    { id: 2, name: 'DimVovich' },
    { id: 3, name: 'DimVovich' },
    { id: 4, name: 'DimVovich' },
    { id: 5, name: 'DimVovich' },
  ]as Array<DialogsDataType>,
  messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hello' },
    { id: 3, message: 'Hello' },
    { id: 4, message: 'Hello' },
    { id: 5, message: 'Hello' },
  ]as Array<MessagesDataType>,
};

const dialogsReducer = (state = initialState, action: ActionsType):InitialStateType => {
  switch (action.type) {
    case 'SN/DIALOGS/SEND-MESSAGE': {
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

export const actions ={
sendMessageCreator : (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody}as const),
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionsType=InferActionsTypes<typeof actions>