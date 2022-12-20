import { useState, useContext } from "react";
import UpdateForm from "../forms/update_form";
import WallContext from "../../../../context/wall/wall_context";
import ModalContext from "../../../../context/modal/modal_context";
import { EditButton, DeleteButton, UserButton } from "./action_buttons/action_buttons";
import styles from "./message.module.scss";

function CommentItem({comment}) {
    const {id, content, message_id} = comment;

    const { updateComment } = useContext(WallContext);
    const { openDeleteCommentModal } = useContext(ModalContext);
    
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditClick = () => {
        setShowEditForm(true);
    }

    const handleCancelClick = () => {
        setShowEditForm(false);
    }

    const handleEditSubmit = (newContent) => {
        updateComment(message_id, id, newContent);
        setShowEditForm(false);
    }

    const handleDeleteClick = () => {
        openDeleteCommentModal(message_id, id);
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