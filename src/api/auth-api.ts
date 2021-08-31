import { instance, ResponseType } from './api';



export type MeResponseDataType = {
  id: number
  email: string
  login: string
}

export type LoginResponseDataType = {
  userId: number
}


export const authAPI = {
  me() {
    return instance.get<ResponseType<MeResponseDataType>>(`auth/me`).then(response => response.data);
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
    return instance.post<ResponseType<LoginResponseDataType>>(`auth/login`, {
      email,
      password,
      rememberMe,
      captcha,
    }).then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
