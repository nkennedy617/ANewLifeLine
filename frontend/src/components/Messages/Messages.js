import React, {Component} from "react";
import Posts from "../Posts/Posts";
import PostEditor from '../PostEditor/PostEditor';


class Messages extends Component {

    constructor(props) {
        super(props);

        this.databaseRef = this.props.database.ref().child('post');
        this.newPost = this.newPost.bind(this);
        this.updateLocalState = this.updateLocalState.bind(this);

        this.state = {
            posts: [],
        }
    }

    componentWillMount() {
        const {updateLocalState} = this;
        this.databaseRef.on('child_added', snapshot => {
            const response = snapshot.val();
            updateLocalState(response);
        });
    }

    newPost(postBody) {
        const postToSave = {postBody};
        this.databaseRef.push().set(postToSave);
    }

    updateLocalState(response) {
        const posts = this.state.posts;
        const brokenDownPost = response.postBody.split(/[\r\n]/g);
        posts.push(brokenDownPost);
        this.setState({
            posts: posts,
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.posts.map((postBody, idx) => {
                    return (
                        <Posts key={idx} postBody={postBody}/>
                        )
                    })
                }
                <PostEditor newPost={this.newPost}/>
            </div>
        );
    }
}

export default Messages;
