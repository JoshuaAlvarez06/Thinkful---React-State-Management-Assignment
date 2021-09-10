import React from "react"

export default function PostView({post, deletePost}) {
    return (
        <div className="post">
            {post.type === "Text" ? <p>{post.content}</p> : <img src={post.content} alt="Added"/>}
            <br/>
            <button name="delete" onClick={deletePost}>Delete</button>
        </div>
        
    )
}