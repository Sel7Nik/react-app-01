import axios from 'axios';
import { UserType } from '../types/type';

export const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    'API-KEY': '4438de1e-db1f-4295-ad92-efa0743a311e',
  },
});

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
}

export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}


export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

export type APIResponseType<D = {}, RC = ResultCodeEnum | ResultCodeForCaptchaEnum> = {
  data: D
  messages: Array<string>
  resultCode: RC
}

