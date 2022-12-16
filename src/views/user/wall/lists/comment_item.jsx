import PencilIcon from "../../../../assets/images/pencil-write.svg";
import DeleteIcon from "../../../../assets/images/delete.svg";
import UserIcon from "../../../../assets/images/user.svg";
import styles from "./message.module.scss";

function CommentItem({comment}) {
    return (
        <li className={styles.message}>
            <div className={styles.message_content}>
                <p>{comment.content}</p> 
                <div className={styles.message_actions}>
                    <button type="button" className={styles.message_edit}>
                        <img src={PencilIcon} alt="Pencil icon" />
                        Edit
                    </button>
                    <button type="button" className={styles.message_delete} data-target="delete_comment_modal">
                        <img src={DeleteIcon} alt="Delete icon" />
                        Delete
                    </button>
                    <button type="button" className={styles.message_user}>
                        <img src={UserIcon} alt="User icon" />
                        <span>You</span> - Few seconds ago                                
                    </button>
                </div>
            </div>
            <form action="#" className={`${styles.update_form} ${styles.hide}`}>
                <textarea name="content" tabIndex="1"></textarea>
                <button type="button" className={styles.cancel_edit} tabIndex="3">Cancel</button>
                <button type="submit" className={styles.btn_secondary} tabIndex="2">Update Comment</button>
            </form>
        </li>
    )
}

export default CommentItem