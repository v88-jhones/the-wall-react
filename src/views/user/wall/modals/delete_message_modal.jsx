import styles from "./modal.module.scss";
import { Button, LinkButton } from "../../../global/components/button";

function DeleteMessageModal(props){

    const {onClose, onSubmit} = props;
    
    const stopPropagation = (event) => {
        event.stopPropagation();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }

    return (
        <div 
            className={styles.modal} 
            id={styles.delete_message_modal} 
            onClick={onClose}
        >
            <div className={styles.modal_body} onClick={stopPropagation}>
                <h4>Confirm Delete Message</h4>
                <p>Are you sure you want to remove this message?</p>
                <p>This action cannot be undone.</p>
                <form action="#" id={styles.delete_message_form} onSubmit={handleSubmit}>
                    <LinkButton tabIndex="2" onClick={onClose}>Cancel</LinkButton>
                    <Button tabIndex="1" type="submit" small>Yes, Remove It.</Button>
                </form>
                <button 
                    type="button" 
                    className={styles.modal_close}
                    onClick={onClose}
                ></button>
            </div>
        </div>
    )

}

export default DeleteMessageModal;