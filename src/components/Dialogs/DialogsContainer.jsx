import React from "react";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
            let state = store.getState();
            debugger
            let changeMessage = (messageValue) => {
                let action = updateNewMessageTextActionCreator(messageValue)
                store.dispatch(action)
            }
            let sendMessage = () => store.dispatch(sendNewMessageActionCreator())
            return (
                <Dialogs onChangeMessage={changeMessage} onSendMessage={sendMessage} dialogsPage={state.dialogReducer.dialogsPage}/>
            )
        }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;