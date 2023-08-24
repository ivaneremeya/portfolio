import React from "react";
import PostItem from "./companent/postItem";


function PostList({post, title}) {
    
    return (
        <div>
            <h1 className='tite-list '>{title}</h1>
            {console.log(post)}
            {post.map((posts, index) => <PostItem number = {index + 1} post={posts} key = {posts.id}/>)}
        </div>
    );
}

export default PostList;