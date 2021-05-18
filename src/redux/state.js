import { rerenderEntireTree } from '../render.js';
let state = {
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
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 6,
    message: postMessage,
    likeCount: 0,
  };

  state.profilePage.postsData.push(newPost);

  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
