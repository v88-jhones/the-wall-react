import MessageItem from "./message_item";
import NoMessage from "../no_message/no_message";

function MessageList({messages}) {

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
                        />
                    ))
                }
            </ul>
        </>
    )
}

export default MessageList