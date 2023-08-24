import React, {useState} from "react";
import MyBtn from './UI/button/myBtn';
import MyInput from './UI/input/MyInput';


function FormPost(props) {

    const [ps, setPs] = useState({ title: '', discr: ''});



  const titleChangeHandler = (event) => {
    setPs({...ps, title: event.target.value})
  }

  const descrChangeHandler = (event) => {
    setPs({...ps, discr: event.target.value})
  }



  const addNewPost = (e) => {
    e.preventDefault();

 
    const newPost = {...ps, id: Date.now()}
    props.create(newPost)
    setPs({ title: '', discr: ''});
    
  }

    return(
        <form onSubmit={addNewPost}>
        <MyInput value= {ps.title} onChange = {titleChangeHandler}  type='text' placeholder='название поста'/>
        <MyInput value= {ps.discr} onChange = {descrChangeHandler} type='text' placeholder='описание'/>
        <MyBtn type="submit" >создать пост</MyBtn>
      </form>
    )
}

export default FormPost;