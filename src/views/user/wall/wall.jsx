import { useState } from "react";
import CreateMessageModal from "./modals/create_message_modal";
import MessageList from "./lists/message_list";
import styles from "./wall.module.scss";

function WallPage(){

    const [showModal, setShowModal] = useState(false)
    const [messages, setMessages] = useState([
        {
            id: "1",
            content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eveniet iste adipisci, nostrum dolorum tempora non nobis a debitis aliquid voluptatum earum, laboriosam hic ipsam.",
            comments: [
                {
                    id: "1",
                    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eveniet iste adipisci, nostrum dolorum tempora non nobis a debitis aliquid voluptatum earum, laboriosam hic ipsam."
                }
            ]
        }
    ]);

    const toggleModal = () => {
        setShowModal(prevState => !prevState);
    }

    const handleSubmit = (newContent) => {
        setMessages(prevState => (
            [
                ...prevState,
                {
                    id: generateId(), 
                    content: newContent,
                    comments: []
                }
            ]
        ))
        toggleModal();
    }

    const handleDelete = (id) => {
        setMessages(prevState => prevState.filter(item => item.id !== id))
    }

    const handleUpdate = (updatedMessage) => {
        setMessages(prevState => prevState.map(item => {
            if(item.id == updatedMessage.id){
                return {...item, content: updatedMessage.content}
            }
            return item
        }))
    }

    const handleAddComment = (newComment) => {
        setMessages(prevState => prevState.map(message => {
            if(newComment.message_id == message.id){
                return {...message, comments: [...message.comments, {id: generateId(), content: newComment.content}]}
            }
            return message;
        }))
    }

    function generateId(){
        return Math.ceil(Date.now() + Math.random());
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.container}>
                    <h4 className={styles.nav_title}>The Wall Assignment</h4>
                    <p>Welcome, Jhones Digno!</p>
                    <a href="/views/">Logout</a>
                </div>
            </nav>

            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.main_header}>
                        <p><span id={styles.message_count}>{messages.length}</span> messages arranged by latest posted</p>
                        <button 
                            type="button" 
                            className={styles.btn_secondary} 
                            onClick={toggleModal}
                        >
                            Create Message
                        </button>
                    </div>
                    <MessageList 
                        messages={messages}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}
                        onCommentAdd={handleAddComment}
                    />                    
                </div>
            </div>

            <CreateMessageModal 
                isOpen={showModal} 
                onClose={toggleModal}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default WallPage;