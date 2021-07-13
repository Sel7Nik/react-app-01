import React from 'react';
import Post from './Post/Post.jsx';
import css from './MyPosts.module.css';

const MyPosts = (props) => {
  let postsElement = props.postsData.map((data) => (
    <Post message={data.message} likeCount={data.likeCount} />
  ));

  let inputNewPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = inputNewPost.current.value;
    props.updateNewPostText(text);
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
          <button onClick={onAddPost}>Add post</button>
        </div>
        {postsElement}
      </div>
    </>
  );
};

export default MyPosts;
