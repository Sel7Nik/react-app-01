import React from 'react';
import Post from './Post/Post.jsx';
import css from './MyPosts.module.css';
import{addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state.js"

const MyPosts = (props) => {
  let postsElement = props.postsData.map((data) => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  let inputNewPost = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = inputNewPost.current.value;
    props.dispatch(updateNewPostTextActionCreator(text))
  };

  return (
    <>
      <div className={css.postsBlock}>
        <h3>My posts</h3>
        <div>
          <textarea
            onChange={onPostChange}
            ref={inputNewPost}
            value={props.newPostText}
          />
          <button onClick={addPost}>Add post</button>
        </div>
        {postsElement}
      </div>
    </>
  );
};

export default MyPosts;
