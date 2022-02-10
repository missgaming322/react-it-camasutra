import React, {createRef} from "react";
import s from "./Post.module.css";
import {deletePost} from "../../../../redux/state";

const Post = (props) => {
    let deletePostButton = createRef();
    let passButtonId = () => {
        let deleteId = deletePostButton.current.id
        deletePost(deleteId)
    }

    return (
        <div className={s.item}>
            <div className={s.itemAvatar}>
                <img src="https://i.ytimg.com/vi/Dk54NG-7B7A/hqdefault.jpg" alt=""/>
            </div>
            <div className={s.itemText}>
                {props.message}
            </div>
            <div className={s.itemLike}>
                <span>👍🏻</span>
                {props.number}
                <button ref={deletePostButton}
                        id={props.id}
                        onClick={passButtonId}>del
                </button>
            </div>
        </div>
    );
}
export default Post;