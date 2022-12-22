import { useForm } from "react-hook-form";
import {Button, LinkButton} from "../../../../global/components/button";
import styles from "./update_form.module.scss";

function UpdateForm(props) {
    const {content, onSubmit, onCancel, btnText = "Update"} = props;
    const { register, handleSubmit, watch, reset } = useForm({
        defaultValues: {
            content
        }
    });

    const handleSubmitContent = (formData) => {
        onSubmit(formData.content);
        reset();
    }

    return (
        <form 
            action="#" 
            className={styles.update_form} 
            onSubmit={handleSubmit(handleSubmitContent)}
        >
            <textarea 
                {...register("content")}
                tabIndex="1" 
                autoFocus
            ></textarea>
            <LinkButton tabIndex="3" onClick={onCancel}>Cancel</LinkButton>
            <Button type="submit" tabIndex="2" disabled={!watch("content")} small>{btnText}</Button>
        </form>
    )
}

export default UpdateForm