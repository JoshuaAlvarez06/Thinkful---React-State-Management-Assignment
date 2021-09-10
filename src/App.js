import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const addPost = (type, content) => {
    const newPost = {
      type,
      content,
    }
    setPosts([
      newPost,
      ...posts,
    ])
  }
  const deletePost = (indexToDelete) =>
    setPosts((currentPosts) => 
    currentPosts.filter((post, index) => index !== indexToDelete)
  );

  // TODO: Add the ability for the <PostCreate /> component to create new posts.
  // TODO: Add the ability for the <PostList /> component to delete an existing post.

  return (
    <div className="App">
      <PostCreate addPost={addPost}/>
      <PostList deletePost={deletePost} posts={posts}/>
    </div>
  );
}

export default App;
