import { useState } from "react";

import UpdateForm from "../components/update_form";
import MessageIcon from "../../../../assets/images/message.svg";
import BlueMessageIcon from "../../../../assets/images/message-blue.svg";
import PencilIcon from "../../../../assets/images/pencil-write.svg";
import DeleteIcon from "../../../../assets/images/delete.svg";
import UserIcon from "../../../../assets/images/user.svg";
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
                                    <button 
                                        type="button" 
                                        className={`${styles.message_comment} ${(showComment ? styles.active : null)}`} 
                                        onClick={handleCommentClick}
                                    >
                                        <img src={showComment ?  BlueMessageIcon : MessageIcon } alt="Message icon" />
                                        <span>{comments.length}</span> Comment
                                    </button>
                                    <button 
                                        type="button" 
                                        className={styles.message_edit}
                                        onClick={handleEditClick}    
                                    >
                                        <img src={PencilIcon} alt="Pencil icon" />
                                        Edit
                                    </button>
                                    <button 
                                        type="button" 
                                        className={styles.message_delete}
                                        onClick={handleDeleteClick}
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