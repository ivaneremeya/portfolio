import React, { useMemo, useState } from 'react';
import PostList from './postList';
import './style/App.css';
import FormPost from './companent/FormPost';
import PostFilter from './companent/PostFilter';
import MyModal from './companent/UI/MyModal/MyModal';
import MyBtn from './companent/UI/button/myBtn';


function App() {
  const [post, setpost] = useState([
    {id: 1, title: 'jvascript', discr: 'javascripr - это узык программирования'},
    {id: 2, title: 'jvascript2', discr: 'javascripr - это узык программирования2'},
    {id: 3, title: 'jvascript3', discr: 'javascripr - это узык программирования3'}
  ])

  const [filter, setFILTER] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)


  const SortedPost =  useMemo(() => {
    console.log('отработала')
    if(filter.sort) {
      return [...post].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return post;
  }, [filter.sort, post]);

  const SortedAndSerchPort = useMemo(() => {
    return SortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, SortedPost])
 

  // снизу функция создания нового поста
  const crateatePost = (newPost) => {
    setpost([...post, newPost])
    setModal(false)
  }

  const removePost = (itemPost) => {
    setpost(post.filter((p) => p.id !== itemPost.id
    ))
  }

  
   return (
    <div className="App">
      <MyBtn style = {{marginTop: 30}} onClick ={() => { setModal(true)}}>Создать пользователя</MyBtn>
      <MyModal vizible ={modal} setVizible = {setModal}>
        <FormPost  create = {crateatePost}/>
      </MyModal>
      
      <hr style={{margin: '15px 0'}}></hr>

      <PostFilter filter = {filter} setFILTER = {setFILTER}/>
    
    
      <PostList remove = {removePost} post = {SortedAndSerchPort}  title = "список постов1"/> :
      
    
      
    </div>
  );
}

export default App;
