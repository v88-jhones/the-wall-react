import { useState, useContext } from "react";
import UpdateForm from "../forms/update_form/update_form";
import ModalContext from "../../../../context/modal/modal_context";
import WallContext from "../../../../context/wall/wall_context";
import { CommentButton, EditButton, DeleteButton, UserButton } from "./action_buttons/action_buttons"; 
import CreateCommentForm from "../forms/create_comment_form/create_comment_form";
import CommentList from "./comment_list";
import styles from "./message.module.scss";

function MessageItem({message}) {
    const {id, content, comments} = message;

    const { openDeleteMessageModal } = useContext(ModalContext);
    const { updateMessage, addComment } = useContext(WallContext);

    const [showComment, setShowComment] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleDeleteClick = () => {
        openDeleteMessageModal(id);
    }

    const handleEditSubmit = (newContent) => {
        updateMessage(id, newContent);
        setShowEditForm(false);
    }

    const handleEditClick = () => {
        setShowEditForm(true);
    }

    const handleCreateCommentSubmit = (newContent) => {
        addComment(id, newContent);
    }

    const handleCommentClick = () => {
        setShowComment(prevState => !prevState);
    }

    const handleCancelUpdateClick = () => {
        setShowEditForm(false);
    }

    return (
        <li className={styles.message}>
            { 
                showEditForm
                    ? (
                        <UpdateForm 
                            content={content}
                            onSubmit={handleEditSubmit}
                            onCancel={handleCancelUpdateClick}
                            btnText="Update Messaage"
                        />
                    ) 
                    : (
                        <div className={styles.message_content}>
                            <p>{content}</p>
                            <div className={styles.message_actions}>
                                <CommentButton 
                                    onClick={handleCommentClick} 
                                    count={comments.length}
                                    active={showComment}
                                />
                                <EditButton onClick={handleEditClick} />
                                <DeleteButton onClick={handleDeleteClick} />
                                <UserButton userName="You" />
                            </div>
                        </div>
                    )
            }
            
            {
                showComment && 
                    <>
                        <CreateCommentForm onSubmit={handleCreateCommentSubmit} />
                        <CommentList comments={comments}/> 
                    </>
            }
        </li>
    )
}

export default MessageItem