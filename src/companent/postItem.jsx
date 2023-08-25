import React from "react";
import MyBtn from "./UI/button/myBtn";


function PostItem(props) {
    
    return (
        <div className='post'>
      <div className='post__count'>
        <strong>{props.number}. {props.post.discr}</strong>
        <div> {props.post.title}  </div>
      </div>
      <div className='post__btns'>
        <MyBtn onClick = {() => {
          props.remove(props.post)
        
        }}>Dilit</MyBtn>
        
      </div>
      </div>
    )
};

export default PostItem;