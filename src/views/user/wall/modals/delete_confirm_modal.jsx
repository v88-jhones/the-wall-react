import styles from "./modal.module.scss";

function DeleteConfirmModal({ 
        isOpen = false, 
        onClose = () => {}, 
        onSubmit = () => {}
    }){

    
    const stopPropagation = (event) => {
        event.stopPropagation();
    }

    return (
        <div 
            className={`${styles.modal} ${isOpen ? styles.show : ""}`} 
            id={styles.delete_message_modal} 
            onClick={onClose}
        >
            <div className={styles.modal_body} onClick={stopPropagation}>
                <h4>Confirm Delete Message</h4>
                <p>Are you sure you want to remove this message?</p>
                <p>This action cannot be undone.</p>
                <form action="#" id={styles.delete_message_form} onSubmit={onSubmit}>
                    <input type="hidden" name="message_id" value="" />
                    <button 
                        type="button" 
                        className={styles.modal_cancel}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit" 
                        className={styles.btn_secondary} 
                    >
                        Yes, Remove It.
                    </button>
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

export default DeleteConfirmModal;