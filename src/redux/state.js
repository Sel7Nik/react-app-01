const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
        { id: 2, message: 'It is my first post', likeCount: '0' },
      ],
      newPostText: 'it-kama',
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'DimDimitch' },
        { id: 2, name: 'DimVovich' },
      ],
      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
      ],
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  _addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likeCount: '0',
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },



  dispatch(action) {
    if(action.type === ADD_POST){
       this._addPost()
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
       this._updateNewPostText(action.newText)
    }
  },


};
  export const addPostActionCreator = () => ({ type: ADD_POST});
  export const  updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text,});

export default store;
window.store = store;
