import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post1.jsx";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
    let PostElements =
        props.profilePage.posts.map(p => <Post  message={p.message} number={p.number} id={p.id} dispatch={props.dispatch}/>);

    let newPostElement = React.createRef();

    let passPostMessage = () => {
        props.dispatch(addPostActionCreator());

    }
    let onPostChange = () => {
        let textareaValue = newPostElement.current.value
        let action = updateNewPostTextActionCreator(textareaValue)
        props.dispatch(action);
    }

    return (
        <div className={s.posts}>
            <div>
                <h1>My posts</h1>
            </div>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.profilePage.newPostText}/>
                <button onClick={passPostMessage}>Add post</button>
            </div>

            <div>
                {PostElements}
            </div>
        </div>
    );
}
export default MyPosts;