import { profileAPI } from './profile-api';
import { GetItemsType, instance, ResponseType } from './api';



export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ResponseType>
  },
  getProfile(userId: number) {
    console.warn('Obsolete metod.Please profileAPI object.');
    return profileAPI.getProfile(userId);
  },
};
