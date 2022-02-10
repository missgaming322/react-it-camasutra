import React from "react";
import s from "./../Dialogs.module.css";
import {Link} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <Link to={"/dialog/" + props.id}>{props.name}</Link>
        </div>
    );
}
export default DialogItem;