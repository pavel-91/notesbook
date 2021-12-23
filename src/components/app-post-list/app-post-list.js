import React from "react";
import PostListItem from "../app-post-item/app-post-item";


const PostList = ({posts, onDelete}) => {

    const elements = posts.map((item) => {
        const {id, category, content} = item;
        return (
            <li key={item.id} className="list-style">
              <PostListItem category={category} content={content} onDelete={() => onDelete(id)}/>
            </li>
        )
        
    });

    return (
        <div className="box-container">
            {elements}
        </div>
    )
}

export default PostList;