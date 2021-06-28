let rerenderEntireTree = () => {};
const state = {
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
};

window.state = state;
export const addPost = () => {
  let newMessage = {
    id: 3,
    message: state.profilePage.newPostText,
    likeCount: '0',
  };
  state.profilePage.postsData.push(newMessage);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};
export default state;
