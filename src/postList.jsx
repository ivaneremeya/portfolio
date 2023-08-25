import React from "react";
import PostItem from "./companent/postItem";
import { CSSTransition,TransitionGroup } from "react-transition-group";



function PostList({post, title, remove}) {
    if(!post.length) {
        return    (
            <h1 style={{textAlign: 'center'}}> Нечего не найденно</h1>
        )
    }
    return (
        <div>
            <h1 className='tite-list '>{title}</h1>
            <TransitionGroup>
                
                {post.map((posts, index) => 
                    <CSSTransition
                        key={posts.id}
                        timeout={500}
                        classNames="post"
                    > 
                        <PostItem remove = {remove} number = {index + 1} post={posts} />
                    </CSSTransition>    
                )
                }
            </TransitionGroup>
        </div>
    );
}

export default PostList;