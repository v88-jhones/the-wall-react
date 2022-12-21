import { useState } from "react";
import UpdateForm from "../forms/update_form/update_form";
import { useDispatch } from "react-redux";
import { openDeleteCommentModal } from "../../../../redux/modal/modal_slice";
import { updateComment } from "../../../../redux/wall/wall_slice";
import { EditButton, DeleteButton, UserButton } from "./action_buttons/action_buttons";
import styles from "./message.module.scss";

function CommentItem({comment}) {
    const {id, content, message_id} = comment;

    const dispatch = useDispatch();
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(true);
    }

    const handleCancelClick = () => {
        setShowEditForm(false);
    }

    const handleEditSubmit = (newContent) => {
        dispatch(updateComment({
            message_id: message_id, 
            comment_id: id, 
            content: newContent
        }));
        setShowEditForm(false);
    }

    const handleDeleteClick = () => {
        dispatch(openDeleteCommentModal({message_id, comment_id: id}));
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