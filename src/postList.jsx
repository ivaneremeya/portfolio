import React from "react";
import PostItem from "./companent/postItem";


function PostList({post, title, remove}) {
    
    return (
        <div>
            <h1 className='tite-list '>{title}</h1>
            
            {post.map((posts, index) => <PostItem remove = {remove} number = {index + 1} post={posts} key = {posts.id}/>)}
        </div>
    );
}

export default PostList;