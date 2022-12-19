import { useState } from "react";
import MessageItem from "./message_item";
import NoMessage from "../no_message/no_message";
import DeleteMessageModal from "../modals/delete_message_modal";

function MessageList(props) {
    const {messages, onUpdate, onDelete} = props;
    const [showDeleteMsgModal, setShowDeleteMsgModal] = useState(false);
    const [deleteMsgId, setDeleteMsgId] = useState(0);

    const handleDeleteClick = (id) => {
        setDeleteMsgId(id);
        setShowDeleteMsgModal(true);
    }

    const handleDeleteMsgClose = () => {
        setShowDeleteMsgModal(false);
    }

    const handleDeleteMessageSubmit = () => {
        onDelete(deleteMsgId);
        setShowDeleteMsgModal(false);
    }

    if(messages.length < 1){
        return <NoMessage />
    }

    return (
        <>
            <ul>
                {
                    messages.map((message) => (
                        <MessageItem 
                            key={message.id} 
                            message={message} 
                            onDelete={handleDeleteClick} 
                            onUpdate={onUpdate}
                        />
                    ))
                }
            </ul>
                
            {
                showDeleteMsgModal &&
                    <DeleteMessageModal  
                        onClose={handleDeleteMsgClose}
                        onSubmit={handleDeleteMessageSubmit}
                    />
            }
        </>
    )
}

export default MessageList