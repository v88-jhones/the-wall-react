import { useState } from "react";
import UpdateForm from "../forms/update_form";
import {CommentButton, EditButton, DeleteButton, UserButton} from "./action_buttons/action_buttons"; 
import CommentList from "./comment_list";
import styles from "./message.module.scss";

function MessageItem(props) {
    const {message, onDeleteClick, onEditSubmit} = props;
    const {id, content} = message;

    const [comments, setComments] = useState([]);
    const [showComment, setShowComment] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const handleEditSubmit = (newContent) => {
        onEditSubmit({id, content: newContent});
        setShowEditForm(false);
    }

    const handleCreateComment = (newContent) => {
        setComments(prevComments => [{id: generateId(), content: newContent}, ...prevComments]);
    }

    const handleUpdateComment = (id, newContent) => {
        setComments(prevComments => prevComments.map(comment => {
            if(comment.id === id){
                return { ...comment, content: newContent }
            }
            return comment;
        }))
    }

    const handleDeleteComment = (comment_id) => {
        setComments(prevComments => prevComments.filter(comment => comment.id !== comment_id));
    }

    const handleEditClick = () => {
        setShowEditForm(true);
    }

    const handleCommentClick = () => {
        setShowComment(prevState => !prevState);
    }

    const handleDeleteClick = () => {
        onDeleteClick(id);
    }

    const handleCancelUpdateClick = () => {
        setShowEditForm(false);
    }

    function generateId(){
        return Math.ceil(Date.now() + Math.random());
    }

    return (
        <>
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
                        <CommentList 
                            comments={comments}
                            onCreate={handleCreateComment}
                            onUpdate={handleUpdateComment}
                            onDelete={handleDeleteComment}
                        /> 
                }
            </li>
        </>

    )
}

export default MessageItem