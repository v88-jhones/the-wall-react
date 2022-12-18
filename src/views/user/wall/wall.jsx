import { useState } from "react";
import { Link } from "react-router-dom";
import CreateMessageModal from "./modals/create_message_modal";
import MessageList from "./lists/message_list";
import styles from "./wall.module.scss";

function WallPage(){

    const [messages, setMessages] = useState([]);
    const [showCreateMsgModal, setShowCreateMsgModal] = useState(false);

    const handleCreateMsgSubmit = (newContent) => {
        setMessages(prevMessages => (
            [
                ...prevMessages,
                {
                    id: generateId(), 
                    content: newContent
                }
            ]
        ));
        setShowCreateMsgModal(false);
    }

    const handleCreateMsgClose = () => {
        setShowCreateMsgModal(false);
    }

    const handleCreateMsgClick = () => {
        setShowCreateMsgModal(true);
    }

    const handleUpdateMsg = (updatedMessage) => {
        setMessages(prevMessages => prevMessages.map(item => {
            if(item.id === updatedMessage.id){
                return {...item, content: updatedMessage.content};
            }
            return item;
        }))
    }

    const handleDeleteMsg = (message_id) => {
        setMessages(prevMessages => prevMessages.filter(item => item.id !== message_id));
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
                    <Link to="/">Logout</Link>
                </div>
            </nav>

            <div className={styles.container}>
                <div className={styles.main}>
                    <div className={styles.main_header}>
                        <p><span id={styles.message_count}>{messages.length}</span> messages arranged by latest posted</p>
                        <button 
                            type="button" 
                            className={styles.btn_secondary} 
                            onClick={handleCreateMsgClick}
                        >
                            Create Message
                        </button>
                    </div>
                    <MessageList 
                        messages={messages}
                        onUpdate={handleUpdateMsg}
                        onDelete={handleDeleteMsg}
                    />                    
                </div>
            </div>

            {
                showCreateMsgModal &&
                    <CreateMessageModal 
                        onClose={handleCreateMsgClose}
                        onSubmit={handleCreateMsgSubmit}
                    />
            }
        </>
    );
}

export default WallPage;