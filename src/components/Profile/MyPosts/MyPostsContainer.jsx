import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";



const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
            let state = store.getState();
            console.log(state)
            let passPostMessage = () => {
                store.dispatch(addPostActionCreator())
            }
            let PostChange = (textareaValue) => {
                let action = updateNewPostTextActionCreator(textareaValue)
                store.dispatch(action)
            }

            return <MyPosts updateNewPostText={PostChange} passPostMessage={passPostMessage}
                            profilePage={state.profileReducer.profilePage}/>
        }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer;
