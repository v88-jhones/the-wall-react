import { useState } from "react";
import UpdateForm from "../components/update_form";
import PencilIcon from "../../../../assets/images/pencil-write.svg";
import DeleteIcon from "../../../../assets/images/delete.svg";
import UserIcon from "../../../../assets/images/user.svg";
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
                            <button type="button" className={styles.message_edit} onClick={handleEditClick}>
                                <img src={PencilIcon} alt="Pencil icon" />
                                Edit
                            </button>
                            <button type="button" className={styles.message_delete} onClick={handleDeleteClick}>
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
        </li>
    )
}

export default CommentItem;