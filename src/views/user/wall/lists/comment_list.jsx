import { useState } from "react";
import CommentItem from "./comment_item";
import DeleteCommentModal from "../modals/delete_comment_modal";
import { Button } from "../../../global/components/button";
import styles from "./message.module.scss";

function CommentList(props){
    const {comments, onCreate, onUpdate, onDelete} = props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteCommentId, setDeleteCommentId] = useState(0);
    const [createCommentBtnDisabled, setCreateCommentBtnDisabled] = useState(true)

    const handleDeleteCommentSubmit = () => {
        onDelete(deleteCommentId);
        setDeleteCommentId(0);
        setShowDeleteModal(false);
    }

    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    }

    const handleCreateCommentSubmit = (event) => {
        event.preventDefault();
        let newContent = event.target.elements.content.value;
        onCreate(newContent);
        event.target.reset();
        setCreateCommentBtnDisabled(true);
    }

    const handleEditSubmit = (id, newContent) => {
        onUpdate(id, newContent);
    }

    const handleDeleteClick = (id) => {
        setDeleteCommentId(id);
        setShowDeleteModal(true);
    }

    const validateInput = (event) => {
        let textarea = event.target;
        if(textarea.value === ""){
            setCreateCommentBtnDisabled(true);
        }
        else{
            setCreateCommentBtnDisabled(false);
        }
    }

    return (
        <>
            <div className={styles.message_comments}>
                <form action="#" className={styles.message_form} onSubmit={handleCreateCommentSubmit}>
                    <textarea 
                        name="content" 
                        placeholder="Type your comment here." 
                        tabIndex="1"
                        onChange={validateInput}
                        autoFocus
                    ></textarea>
                    <Button 
                        type="submit" 
                        tabIndex="2" 
                        disabled={createCommentBtnDisabled}
                        small
                    >
                        Post Comment
                    </Button>
                </form>

                <ul>
                    {
                        comments.map(comment => (
                            <CommentItem 
                                key={comment.id} 
                                comment={comment} 
                                onEditSubmit={handleEditSubmit}
                                onDeleteClick={handleDeleteClick}
                            />
                        ))
                    }
                </ul>
            </div>

            {
                showDeleteModal &&
                    <DeleteCommentModal 
                        onClose={handleCloseDeleteModal}
                        onSubmit={handleDeleteCommentSubmit}
                    />
            }
        </>        
    );
}

export default CommentList;