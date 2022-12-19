import { useState } from "react";
import UpdateForm from "../forms/update_form";
import {EditButton, DeleteButton, UserButton} from "./action_buttons/action_buttons";
import styles from "./message.module.scss";

function CommentItem(props) {
    const {comment, onEditSubmit, onDeleteClick} = props;
    const {id, content} = comment;

    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(true);
    }

    const handleCancelClick = () => {
        setShowEditForm(false);
    }

    const handleEditSubmit = (newContent) => {
        onEditSubmit(id, newContent);
        setShowEditForm(false);
    }

    const handleDeleteClick = () => {
        onDeleteClick(id);
    }

    return (
        <li className={styles.message}>
            {
                showEditForm 
                ? (
                    <UpdateForm 
                        content={content}
                        onSubmit={handleEditSubmit}
                        onCancel={handleCancelClick}
                        btnText="Update Comment"
                    />
                )
                : (
                    <div className={styles.message_content}>
                        <p>{comment.content}</p> 
                        <div className={styles.message_actions}>
                            <EditButton onClick={handleEditClick} />
                            <DeleteButton onClick={handleDeleteClick} />
                            <UserButton userName="You" />
                        </div>
                    </div>
                )
            }
        </li>
    )
}

export default CommentItem;