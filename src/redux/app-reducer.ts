import { getAuthUserData } from './auth-reducer';
import { InferActionsTypes } from "./redux-store";


let initialState = {
  initialized: false,
};

export type initialStateType = typeof initialState
type ActionType = InferActionsTypes<typeof actions>

const appReducer = (state: initialStateType = initialState, action: ActionType): initialStateType => {
  switch (action.type) {
    case "SN/APP/INITIALIZED_SUCCESS":
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const actions = {
  initializedSuccess: () => ({ type: 'SN/APP/INITIALIZED_SUCCESS' }) as const
}

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(actions.initializedSuccess());
  });
};

export default appReducer;
