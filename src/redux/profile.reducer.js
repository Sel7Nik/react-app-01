const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
    { id: 2, message: 'It is my first post', likeCount: '0' },
    { id: 3, message: 'It is my second post', likeCount: '32' },
    { id: 4, message: 'It is my eleven post', likeCount: '99' },
    { id: 5, message: 'It is my life', likeCount: '44' },
  ],
  newPostText: 'new posts text',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
