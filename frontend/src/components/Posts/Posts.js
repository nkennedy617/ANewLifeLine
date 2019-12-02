import React from "react";
import './Posts.css';
import PostEditor from '../PostEditor/PostEditor.js'

const Posts = (props) => (
        <div className="card post-body">
                 <button className="btn btn-success post-delete-button" onClick={PostEditor.deletePost}>Delete</button>
            <div className="card-body">
                {
                    props.postBody.map((postPart, idx) => (
                        <div key={idx}>{postPart}</div>
                    ))
                }
            </div>
        </div>
    );

export default Posts;
