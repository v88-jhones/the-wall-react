import { Button, LinkButton } from "../../../global/components/button";
import { useForm } from "react-hook-form";
import styles from "./modal.module.scss";

function CreateMessageModal(props){
    const { register, handleSubmit, watch } = useForm();
    const {onClose, onSubmit} = props;

    const handleSubmitMsg = (formData) => {
        onSubmit(formData.content);
    }

    const handleClose = (event) => {
        onClose(event);
    }

    const stopPropagation = (event) => {
        event.stopPropagation();
    }

    return (
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modal_body} onClick={stopPropagation}>
                <h4>Create a Message</h4>
                <form action="#" id={styles.create_message_form} onSubmit={handleSubmit(handleSubmitMsg)}>
                    <textarea 
                        placeholder="Type your message here" 
                        tabIndex="1"
                        {...register("content")}
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
                        disabled={!watch("content")}
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