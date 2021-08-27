import { stopSubmit } from 'redux-form';
import { usersAPI, profileAPI } from '../api/api';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';



export type PostsDataType = {
  id: number,
  message: string,
  likeCount: number,
}
export type ContactsType = {
  github: string,
  vk: string,
  facebook: string,
  instagram: string,
  twitter: string,
  website: string,
  youtube: string,
  mainLink: string,
}
export type PhotosType = {
  small: string | null,
  large: string | null
}


export type ProfileType = {
  userId: number,
  lookingForAJob: string,
  lookingForAJobDescription: string | null,
  fullName: string | null,
  contacts: ContactsType,
  photos: PhotosType,

}




let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you Ok', likeCount: 23 },
    { id: 2, message: 'It is my first post', likeCount: 14 },
    { id: 3, message: 'BlaBlaBla', likeCount: 11 },
    { id: 4, message: 'Dadada', likeCount: 9 },
  ] as Array<PostsDataType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: '',

};

export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postsData: [
          ...state.postsData,
          {
            id: 3,
            message: action.newPostText,
            likeCount: 0,
          },
        ],
        newPostText: '',
      };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case DELETE_POST: {
      return {
        ...state,
        postsData: state.postsData.filter((post) => post.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }
    default:
      return state;
  }
};
//! Action Creator
//* addPostActionCreator
type AddPostActionCreatorType = {
  type: typeof ADD_POST,
  newPostText: string
}
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
});
//* setUserProfile
type SetUserProfileCreatorType = {
  type: typeof SET_USER_PROFILE,
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileCreatorType => ({
  type: SET_USER_PROFILE,
  profile,
});
//* setStatus
type SetStatusActionType = {
  type: typeof SET_STATUS,
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({
  type: SET_STATUS,
  status,
});

//* deletePost
type deletePostActionType = {
  type: typeof DELETE_POST,
  postId: number
}
export const deletePost = (postId: number): deletePostActionType => ({
  type: DELETE_POST,
  postId,
});

//* savePhotoSuccess
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType,
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

//* saveProfileSuccess
type SaveProfileSuccessActionType = {
  type: typeof SAVE_PROFILE_SUCCESS
  profile: ProfileType
}
export const saveProfileSuccess = (profile: ProfileType): SaveProfileSuccessActionType => ({
  type: SAVE_PROFILE_SUCCESS,
  profile,
});

//! dispatch
export const getUserProfile = (userId: number) => async (dispatch: any) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId: number) => async (dispatch: any) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status: string) => async (dispatch: any) => {
  const response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit('edit-profile', { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
