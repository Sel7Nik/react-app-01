import React from 'react';
import Post from './Post/Post';
import css from './MyPosts.module.css';
import AddNewPostFormRedux, { AddNewPostFormValuesType } from './AddNewPostForm';
import { PostsDataType } from '../../../types/type';

type PropsType = {
  postsData: Array<PostsDataType>
  addPost: (newPostText: string) => void
}

const MyPosts: React.FC<PropsType> = (props) => {

  let postsElement = [...props.postsData]
    .reverse()
    .map((data) => (
      <Post message={data.message} likeCount={data.likeCount} key={data.id} />
    ));


  let onAddPost = (value: AddNewPostFormValuesType) => {  // нужен импорт
    // let onAddPost = (value: { newPostText: string }) => {
    props.addPost(value.newPostText);
  };

  return (
    <>
      <div className={css.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost} />
        <div className={css.posts}>{postsElement}</div>
      </div>
    </>
  );
};



export default MyPosts;
