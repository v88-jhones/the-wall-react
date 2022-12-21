import { useState } from "react";
import {Button, LinkButton} from "../../../../global/components/button";
import styles from "./update_form.module.scss";

function UpdateForm(props) {
    const {content, onSubmit, onCancel, btnText = "Update"} = props;
    const [disabledBtn, setDisabledBtn] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        let newContent = event.target.elements.content.value;
        onSubmit(newContent);
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
            <LinkButton tabIndex="3" onClick={onCancel}>Cancel</LinkButton>
            <Button type="submit" tabIndex="2" disabled={disabledBtn} small>{btnText}</Button>
        </form>
    )
}

export default UpdateForm