import { useState, useRef } from "react";

import MessageIcon from "../../../../assets/images/message.svg";
import BlueMessageIcon from "../../../../assets/images/message-blue.svg";
import PencilIcon from "../../../../assets/images/pencil-write.svg";
import DeleteIcon from "../../../../assets/images/delete.svg";
import UserIcon from "../../../../assets/images/user.svg";
import CommentList from "./comment_list";
import styles from "./message.module.scss";

function MessageItem({message, onDeleteClick, onEditSubmit, onAddCommentSubmit}) {
    const {id, content, comments} = message;

    const [showComment, setShowComment] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const toggleComment = () => {
        setShowComment(prevState => !prevState);
    }

    const toggleShowEditForm = () => {
        setShowEditForm(prevState => !prevState);
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        onEditSubmit({id, content: event.target.elements.content.value});
        toggleShowEditForm();
    }

    const handleAddComment = (event) => {
        event.preventDefault();
        onAddCommentSubmit({message_id: id, content: event.target.elements.content.value});
        event.target.reset();
        event.target.closest("form").querySelector("button[type='submit']").setAttribute("disabled", true);
    }

    const contentChange = (event) => {
        let textarea = event.target;
        let submit_btn = textarea.closest("form").querySelector("button[type='submit']");
        if(textarea.value === ""){
            submit_btn.setAttribute("disabled", true);
        }
        else{
            submit_btn.removeAttribute("disabled");
        }
    }

    return (
        <li className={styles.message}>
            { 
                showEditForm
                ? (
                    <form action="#" className={styles.update_form} onSubmit={handleEditSubmit}>
                        <textarea 
                            name="content" 
                            tabIndex="1" 
                            defaultValue={content}
                            autoFocus
                            onChange={contentChange}
                        ></textarea>
                        <button 
                            type="button" 
                            className={styles.cancel_edit} 
                            tabIndex="3"
                            onClick={toggleShowEditForm}    
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className={styles.btn_secondary} 
                            tabIndex="2"
                        >
                            Update Message
                        </button>
                    </form>
                ) 
                : (
                    <div className={styles.message_content}>
                        <p>{content}</p>
                        <div className={styles.message_actions}>
                            <button 
                                type="button" 
                                className={`${styles.message_comment} ${(showComment ? styles.active : null)}`} 
                                onClick={toggleComment}
                            >
                                <img src={showComment ?  BlueMessageIcon : MessageIcon } alt="Message icon" />
                                <span>{comments.length}</span> Comment
                            </button>
                            <button 
                                type="button" 
                                className={styles.message_edit}
                                onClick={toggleShowEditForm}    
                            >
                                <img src={PencilIcon} alt="Pencil icon" />
                                Edit
                            </button>
                            <button 
                                type="button" 
                                className={styles.message_delete}
                                onClick={() => onDeleteClick(id)}
                            >
                                <img src={DeleteIcon} alt="Delete icon" />
                                Delete
                            </button>
                            <button type="button" className={styles.message_user}>
                                <img src={UserIcon} alt="User icon" />
                                <span>You</span> - Few seconds ago                                
                            </button>
                        </div>
                    </div>
                )
            }

            <div className={`${styles.message_comments} ${showComment ? "" : styles.hide}`}>
                <form action="#" className={styles.message_form} onSubmit={handleAddComment}>
                    <textarea 
                        name="content" 
                        placeholder="Type your comment here." 
                        tabIndex="1"
                        onChange={contentChange}
                    ></textarea>
                    <button 
                        type="submit" 
                        className={styles.btn_secondary} 
                        tabIndex="2" 
                        disabled
                    >
                        Post Comment
                    </button>
                </form>
                <CommentList comments={comments} />
            </div>
        </li>
    )
}

export default MessageItem