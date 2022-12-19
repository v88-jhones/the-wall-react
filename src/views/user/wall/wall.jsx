import { useState } from "react";
import CreateMessageModal from "./modals/create_message_modal";
import MessageList from "./lists/message_list";
import { Button } from "../../global/components/button";
import Nav from "./nav/nav";
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
            <Nav title="The Wall Assignment" userName="Jhones Digno" />
            <div className="container">
                <div className={styles.main}>
                    <div className={styles.main_header}>
                        <p><span id={styles.message_count}>{messages.length}</span> messages arranged by latest posted</p>
                        <Button onClick={handleCreateMsgClick} small>Create Message</Button> 
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