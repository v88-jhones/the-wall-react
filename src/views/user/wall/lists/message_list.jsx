import { useState } from "react";
import MessageItem from "./message_item";
import NoMessage from "../components/no_message";
import DeleteConfirmModal from "../modals/delete_confirm_modal";

function MessageList({ messages, onDelete = () => {}, onUpdate = () => {}, onCommentAdd = () => {} }) {

    const [showModal, setShowModal] = useState(false);
    const [targetId, setTargetId] = useState(null);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onDelete(targetId);
        setTargetId(null);
        toggleModal();
    }

    const handleDeleteClick = (id) => {
        toggleModal();
        setTargetId(id);
    }

    const handleEditSubmit = (updatedMessage) => {
        onUpdate(updatedMessage);
    }

    const handleAddCommentSubmit = (newComment) => {
        onCommentAdd(newComment);
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
                            onDeleteClick={handleDeleteClick} 
                            onEditSubmit={handleEditSubmit}
                            onAddCommentSubmit={handleAddCommentSubmit}
                        />
                    ))
                }
            </ul>
            <DeleteConfirmModal 
                isOpen={showModal} 
                onClose={toggleModal}
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default MessageList