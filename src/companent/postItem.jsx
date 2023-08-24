import React from "react";


function PostItem(props) {
    
    return (
        <div className='post'>
      <div className='post__count'>
        <strong>{props.number}. {props.post.discr}</strong>
        <div> {props.post.title}  </div>
      </div>
      <div className='post__btns'>
        <button>Dilit</button>
        
      </div>
      </div>
    )
};

export default PostItem;