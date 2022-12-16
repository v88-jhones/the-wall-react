import { useState, useRef, useEffect } from "react";
import styles from "./modal.module.scss";

function CreateMessageModal({ 
    isOpen = false, 
    onClose = () => {}, 
    onSubmit = () => {}
}){

    const [content, setContent] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);

    const textareaRef = useRef(null); 

    useEffect(() => {
        textareaRef.current.focus();
    }, [isOpen]);

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
        <div className={`${styles.modal} ${isOpen ? styles.show : ""}` } onClick={handleClose}>
            <div className={styles.modal_body} onClick={stopPropagation}>
                <h4>Create a Message</h4>
                <form action="#" id={styles.create_message_form} onSubmit={handleSubmit}>
                    <textarea 
                        name="content" 
                        placeholder="Type your message here" 
                        tabIndex="1"
                        onChange={contentChange}
                        value={content}
                        ref={textareaRef}
                    ></textarea>
                    <button 
                        type="button" 
                        className={styles.modal_cancel} 
                        tabIndex="3" 
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className={styles.btn_secondary} 
                        tabIndex="2" 
                        disabled={isDisabled}
                    >
                        Post Message
                    </button>
                </form>
                <button type="button" className={styles.modal_close} onClick={handleClose}></button>
            </div>
        </div>
    );

}

export default CreateMessageModal;