import React, { useMemo, useEffect, useState } from 'react';
import PostList from './postList';
import './style/App.css';
import FormPost from './companent/FormPost';
import PostFilter from './companent/PostFilter';
import MyModal from './companent/UI/MyModal/MyModal';
import MyBtn from './companent/UI/button/myBtn';
import { usePost } from './hooks/usePost';
// import axios from 'axios';
import PostService from './API/PostService';


function App() {
  const [post, setpost] = useState([ ])

  const [filter, setFILTER] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedAndSerchPort = usePost(post, filter.sort, filter.query)

  useEffect (() => {
    FetchPost()
  }, [])

  // снизу функция создания нового поста
  const crateatePost = (newPost) => {
    setpost([...post, newPost])
    setModal(false)
  }
  async function FetchPost() {
    const poster = await PostService.getAll();
    console.log(poster);
      }

  const removePost = (itemPost) => {
    setpost(post.filter((p) => p.id !== itemPost.id
    ))
  }

   return (
    <div className="App">
      <button onClick={FetchPost}>getPost</button>
      <MyBtn style = {{marginTop: 30}} onClick ={() => { setModal(true)}}>Создать пользователя</MyBtn>
      <MyModal vizible ={modal} setVizible = {setModal}>
        <FormPost  create = {crateatePost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}></hr>

      <PostFilter filter = {filter} setFILTER = {setFILTER}/>
    
      <PostList remove = {removePost} post = {sortedAndSerchPort}  title = "список постов1"/> :
      
    </div>
  );
}

export default App;
