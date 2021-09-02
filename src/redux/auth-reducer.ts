import { ResultCodeEnum, ResultCodeForCaptchaEnum } from '../api/api';
import { stopSubmit } from 'redux-form';
import { securityAPI } from "../api/security-api";
import { authAPI } from "../api/auth-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

const SET_USER_DATA = 'react-app-01/auth/SET_USER_DATA';

const GET_CAPTCHA_URL_SUCCESS = 'react-app-01/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState= {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};



const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const actions ={
setAuthUserData : (userId: number | null, email: string | null, login: string | null, isAuth: boolean)=> ({
    type: SET_USER_DATA, payload: { userId, email, login, isAuth },}as const),

  getCaptchaUrlSuccess : (captchaUrl: string)=> ({
    type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl }})

}

export const getAuthUserData = ():ThunkType => async (dispatch) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
};
export const login =
  (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const loginData = await authAPI.login(email, password, rememberMe, captcha);
    if (loginData.resultCode === ResultCodeEnum.Success) {
      dispatch(getAuthUserData());
    } else {
      if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
        dispatch(getCaptchaUrl());
      }
      let messages =
        loginData.messages.length > 0
          ? loginData.messages[0]
          : 'Some error';
      dispatch(stopSubmit('login', { _error: messages }));
    }
  };

export const getCaptchaUrl = () => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;


export type InitialStateType = typeof initialState
type ActionsType= InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>
