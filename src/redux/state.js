import { rerenderEntireTree } from '../index';
const state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
      { id: 2, message: 'It is my first post', likeCount: '0' },
    ],
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

export const addPost = (postMessage) => {
  let newMessage = { id: 3, message: postMessage, likeCount: '0' };
  state.profilePage.postsData.push(newMessage);
  rerenderEntireTree();
};

export default state;
