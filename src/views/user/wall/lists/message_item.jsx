import { useState } from "react";
import { useDispatch } from "react-redux";
import { openDeleteMessageModal } from "../../../../redux/modal/modal_slice";
import { updateMessage, addComment } from "../../../../redux/wall/wall_slice";
import UpdateForm from "../forms/update_form/update_form";
import { CommentButton, EditButton, DeleteButton, UserButton } from "./action_buttons/action_buttons"; 
import CreateCommentForm from "../forms/create_comment_form/create_comment_form";
import CommentList from "./comment_list";
import styles from "./message.module.scss";

function MessageItem({message}) {
    const {id, content, comments} = message;

    const [showComment, setShowComment] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(openDeleteMessageModal(id));
    }

    const handleEditSubmit = (newContent) => {
        dispatch(updateMessage({id, content: newContent}));
        setShowEditForm(false);
    }

    const handleEditClick = () => {
        setShowEditForm(true);
    }

    const handleCreateCommentSubmit = (newContent) => {
        dispatch(addComment({message_id: id, content: newContent}));
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