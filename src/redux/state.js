const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
        { id: 2, message: 'It is my first post', likeCount: '0' },
        { id: 3, message: 'It is my second post', likeCount: '32' },
        { id: 4, message: 'It is my eleven post', likeCount: '99' },
        { id: 5, message: 'It is my life', likeCount: '44' },
      ],
      newPostText: 'new posts text',
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'DimDimitch' },
        { id: 2, name: 'DimVovich' },
        { id: 3, name: 'NikSanytch' },
        { id: 4, name: 'OlegSanytch' },
        { id: 5, name: 'PetrSanytch' },
        { id: 6, name: 'Olegovich' },
      ],

      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you' },
        { id: 4, message: 'I am fine' },
        { id: 5, message: 'I am fine too' },
      ],
      newMessageBody: 'new Message Body',
    },
  },

  _callSubscriber() {
    console.log('state was change');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.messagesData.push({ id: 6, message: body });
      this._state.dialogsPage.newMessageBody = '';
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default store;
window.store = store;
