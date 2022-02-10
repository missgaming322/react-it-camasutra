import React, {useState} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";





const Dialogs = (props) => {


    let dialogsElements =
        props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let Messages =
        props.messages.map(m => <Message message={m.message}/>);

    let messageElemnt = React.createRef();
    let sendMessage = ()=> {
       let text = messageElemnt.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {Messages}
            </div>
            <div>
            <textarea ref={messageElemnt}f></textarea>
            <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}
export default Dialogs;