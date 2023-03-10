import { useState } from "react";
import { Button, LinkButton } from "../../../global/components/button";
import styles from "./modal.module.scss";

function CreateMessageModal(props){

    const {onClose, onSubmit} = props;
    const [content, setContent] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const contentChange = (event) => {
        setContent(event.target.value);
        if(event.target.value === ""){
            setIsDisabled(true);
        }
        else{
            setIsDisabled(false);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(content);
        setContent("");
        setIsDisabled(true);
    }

    const handleClose = (event) => {
        onClose(event);
        setContent("");
        setIsDisabled(true);
    }

    const stopPropagation = (event) => {
        event.stopPropagation();
    }

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal_body} onClick={stopPropagation}>
                <h4>Create a Message</h4>
                <form action="#" id={styles.create_message_form} onSubmit={handleSubmit}>
                    <textarea 
                        name="content" 
                        placeholder="Type your message here" 
                        tabIndex="1"
                        onChange={contentChange}
                        value={content}
                        autoFocus
                    ></textarea>
                    <LinkButton 
                        tabIndex="3" 
                        onClick={handleClose}
                    >
                        Cancel
                    </LinkButton>
                    <Button 
                        type="submit" 
                        tabIndex="2" 
                        disabled={isDisabled}
                        small
                    >
                        Post Message
                    </Button>
                </form>
                <button type="button" className={styles.modal_close} onClick={handleClose}></button>
            </div>
        </div>
    );
}

export default CreateMessageModal;