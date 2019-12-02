import React from "react";
import './Posts.css';
import PostEditor from '../PostEditor/PostEditor.js'

const Posts = (props) => (
        <div className="card post-body">
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
