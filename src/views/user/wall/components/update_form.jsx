import styles from "./update_form.module.scss";

function UpdateForm(props) {

    const {content, onSubmit, onCancel, btnText = "Update"} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        let newContent = event.target.elements.content.value;
        onSubmit(newContent);
    }

    const validateInput = (event) => {
        let textarea = event.target;
        let submit_btn = textarea.closest("form").querySelector("button[type='submit']");
        if(textarea.value === ""){
            submit_btn.setAttribute("disabled", true);
        }
        else{
            submit_btn.removeAttribute("disabled");
        }
    }
    
    return (
        <form 
            action="#" 
            className={styles.update_form} 
            onSubmit={handleSubmit}
        >
            <textarea 
                name="content" 
                tabIndex="1" 
                defaultValue={content}
                autoFocus
                onChange={validateInput}
            ></textarea>
            <button 
                type="button" 
                className={styles.cancel_edit} 
                tabIndex="3"
                onClick={onCancel}    
            >
                Cancel
            </button>
            <button 
                type="submit" 
                className={styles.btn_secondary} 
                tabIndex="2"
            >
                {btnText}
            </button>
        </form>
    )
}

export default UpdateForm