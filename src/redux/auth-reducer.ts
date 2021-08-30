import { ResultCodeEnum, ResultCodeForCaptchaEnum } from './../api/api';
import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';
const SET_USER_DATA = 'react-app-01/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'react-app-01/auth/GET_CAPTCHA_URL_SUCCESS';


//! variant 1
export type InitialStateType = {
  usersId: Number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean,
  captchaUrl: string | null,
};
let initialState: InitialStateType = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

//! variant 2
// let initialState = {
//   usersId: null as number | null,
//   email: null as string | null,
//   login: null as string | null,
//   isAuth: false as boolean,
//   captchaUrl: null as string | null,
// };
// export type InitialStateType = typeof initialState



const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
        usersId: 4
      };
    }
    case GET_CAPTCHA_URL_SUCCESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
export type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType

}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

// type GetCaptchaUrlSuccessActionPayloadType = {
//   captchaUrl:string
// }

type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  // payload: GetCaptchaUrlSuccessActionPayloadType
  payload: { captchaUrl: string }
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch: any) => {
  const meData = await authAPI.me();
  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};
export const login =
  (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
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
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  const response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
