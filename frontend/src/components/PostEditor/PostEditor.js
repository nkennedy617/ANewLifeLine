import React, {Component} from "react";
import './PostEditor.css';

class PostEditor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newPostBody: '',
        };

        this.onPostHandler = this.onPostHandler.bind(this);
        this.createPost = this.createPost.bind(this);
    }


    onPostHandler(event) {
        this.setState({
            newPostBody: event.target.value
        })
    }

    createPost() {
        this.props.newPost(this.state.newPostBody);
        this.setState({
            newPostBody: '',
        })
    }

    render() {
        return (
            <div className="card post-editor">
                <div className="card-body">
                    <textarea className="form-control post-editor-input" value={this.state.newPostBody} onChange={this.onPostHandler}/>
                    <button className="btn btn-success post-editor-button" onClick={this.createPost}>Post</button>
                </div>
            </div>
        )
    }
}

export default PostEditor;
