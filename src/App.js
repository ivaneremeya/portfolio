import React, { useState } from 'react';
import PostList from './postList';
import './style/App.css';
import FormPost from './companent/FormPost';

function App() {
  const [post, setpost] = useState([
    {id: 1, title: 'jvascript', discr: 'javascripr - это узык программирования'},
    {id: 2, title: 'jvascript2', discr: 'javascripr - это узык программирования2'},
    {id: 3, title: 'jvascript3', discr: 'javascripr - это узык программирования3'}
  ])
 
  const crateatePost = (newPost) => {
    setpost(...post, newPost)
  }
  
  return (
    <div className="App">
      <FormPost  create = {crateatePost}/>
      <PostList post = {post}  title = "список постов1"/>
    </div>
  );
}

export default App;
