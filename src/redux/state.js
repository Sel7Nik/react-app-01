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
        { id: 6, message: 'OhOhOh' },
      ],
    },
  },

  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('state was change');
  },

  addPost() {
    let newPost = {
      id: 6,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
window.store = store;
