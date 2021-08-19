import profileReducer, {
  addPostActionCreator,
  deletePost,
} from './profile-reducer';
let state = {
  postsData: [
    { id: 1, message: 'Hi, how are you Ok', likeCount: '23' },
    { id: 2, message: 'It is my first post', likeCount: '14' },
    { id: 3, message: 'BlaBlaBla', likeCount: '11' },
    { id: 4, message: 'Dadada', likeCount: '9' },
  ],
};
//! test 1
test('new post should be added and length shoud be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('it-kama');
  // 2.action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(5);
});
//! test 2
test('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('it-kama');
  // 2.action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData[4].message).toBe('it-kama');
});
//! test 3
test('after deleting length of messages shoud be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  // 2.action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.postsData.length).toBe(3);
});
