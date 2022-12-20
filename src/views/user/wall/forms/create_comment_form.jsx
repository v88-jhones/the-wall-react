import { useState } from "react";
import { Button } from "../../../global/components/button"
import styles from "./create_comment_form.module.scss";

function CreateCommentForm({onSubmit}) {

    const [disabledBtn, setDisabledBtn] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        let newContent = event.target.elements.content.value;
        onSubmit(newContent);
        setDisabledBtn(true);
        event.target.reset();
    }

    const validateInput = (event) => {
        let textarea = event.target;
        if(textarea.value.trim() === ""){
            setDisabledBtn(true);
        }
        else{
            setDisabledBtn(false);
        }
    }

    return (
        <form action="#" className={styles.create_comment_form} onSubmit={handleSubmit}>
            <textarea 
                name="content" 
                placeholder="Type your comment here." 
                tabIndex="1"
                onChange={validateInput}
                autoFocus
            ></textarea>
            <Button 
                type="submit" 
                tabIndex="2" 
                disabled={disabledBtn}
                small
            >
                Post Comment
            </Button>
        </form>
    )
}

export default CreateCommentForm