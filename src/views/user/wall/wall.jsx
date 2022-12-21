import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeDeleteModal } from "../../../redux/modal/modal_slice";
import { addMessage, deleteMessage, deleteComment } from "../../../redux/wall/wall_slice";
import DeleteCommentModal from "./modals/delete_comment_modal";
import DeleteMessageModal from "./modals/delete_message_modal";
import CreateMessageModal from "./modals/create_message_modal";
import MessageList from "./lists/message_list";
import { Button } from "../../global/components/button";
import Nav from "./nav/nav";
import styles from "./wall.module.scss";

function WallPage(){

    const [showCreateMsgModal, setShowCreateMsgModal] = useState(false);
    const { messages } = useSelector(state => state.wall);
    const { delete_message, delete_comment } = useSelector(state => state.modal);
    const dispatch = useDispatch();

    const handleCreateMsgSubmit = (newContent) => {
        dispatch(addMessage(newContent));
        setShowCreateMsgModal(false);
    }

    const handleDeleteMsg = () => {
        dispatch(deleteMessage(delete_message.id));
        dispatch(closeDeleteModal());
    }

    const handleDeleteCmnt = () => {
        dispatch(deleteComment({
            message_id: delete_comment.message_id, 
            comment_id: delete_comment.id 
        }));
        dispatch(closeDeleteModal());
    }

    const handleCreateMsgClose = () => {
        setShowCreateMsgModal(false);
    }

    const handleCreateMsgClick = () => {
        setShowCreateMsgModal(true);
    }

    const handleCloseDeleteModal = () => {
        dispatch(closeDeleteModal());
    }

    return (
        <>
            <Nav title="The Wall Assignment" userName="Jhones Digno" />
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.main_header}>
                        <p><span id={styles.message_count}>{messages.length}</span> messages arranged by latest posted</p>
                        <Button onClick={handleCreateMsgClick} small>Create Message</Button> 
                    </div>
                    <MessageList messages={messages} />                    
                </div>
            </div>

            {
                showCreateMsgModal &&
                    <CreateMessageModal 
                        onClose={handleCreateMsgClose}
                        onSubmit={handleCreateMsgSubmit}
                    />
            }

            {
                delete_message.modal && 
                    <DeleteMessageModal 
                        onClose={handleCloseDeleteModal}
                        onSubmit={handleDeleteMsg}
                    />
            }

            {
                delete_comment.modal && 
                    <DeleteCommentModal 
                        onClose={handleCloseDeleteModal}
                        onSubmit={handleDeleteCmnt}
                    />
            }
        </>
    );
}

export default WallPage;