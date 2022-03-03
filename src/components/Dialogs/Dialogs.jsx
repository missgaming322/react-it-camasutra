import React, {useEffect} from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsElements =
        props.dialogsPage.dialogs.map(d => <DialogItem name={d.name}
                                                       id={d.id}
                                                       key={d.id}/>);

    let Messages =
        props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>);

    //для изменения текстового поля.
    let messageElement = React.createRef();
    let onChangeMessage = ()=> {
       let messageValue = messageElement.current.value
       props.onChangeMessage(messageValue)
    }
    // для вывода сообщения
    let onSendMessage = () => props.onSendMessage()


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {Messages}
            </div>
            <div>
            <textarea
                onChange={onChangeMessage}
                ref={messageElement}
                value={props.dialogsPage.newMessageText}/>
            <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    );
}
export default Dialogs;