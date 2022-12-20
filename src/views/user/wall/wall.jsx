import { useState, useContext } from "react";
import WallContext from "../../../context/wall/wall_context";
import ModalContext from "../../../context/modal/modal_context"
import DeleteCommentModal from "./modals/delete_comment_modal";
import DeleteMessageModal from "./modals/delete_message_modal";
import CreateMessageModal from "./modals/create_message_modal";
import MessageList from "./lists/message_list";
import { Button } from "../../global/components/button";
import Nav from "./nav/nav";
import styles from "./wall.module.scss";

function WallPage(){

    const [showCreateMsgModal, setShowCreateMsgModal] = useState(false);
    const { 
        messages, 
        addMessage, 
        deleteMessage,
        deleteComment,
    } = useContext(WallContext);
    const { delete_message, delete_comment, closeDeleteModal } = useContext(ModalContext);

    const handleCreateMsgSubmit = (newContent) => {
        addMessage(newContent);
        setShowCreateMsgModal(false);
    }

    const handleDeleteMsg = () => {
        deleteMessage(delete_message.id);
        closeDeleteModal();
    }

    const handleDeleteCmnt = () => {
        deleteComment(delete_comment.message_id, delete_comment.id);
        closeDeleteModal();
    }

    const handleCreateMsgClose = () => {
        setShowCreateMsgModal(false);
    }

    const handleCreateMsgClick = () => {
        setShowCreateMsgModal(true);
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
                        onClose={closeDeleteModal}
                        onSubmit={handleDeleteMsg}
                    />
            }

            {
                delete_comment.modal && 
                    <DeleteCommentModal 
                        onClose={closeDeleteModal}
                        onSubmit={handleDeleteCmnt}
                    />
            }
        </>
    );
}

export default WallPage;