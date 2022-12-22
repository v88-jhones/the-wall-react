import { useForm } from "react-hook-form";
import { Button } from "../../../../global/components/button"
import styles from "./create_comment_form.module.scss";

function CreateCommentForm({onSubmit}) {
    const { register, handleSubmit, watch, reset } = useForm();

    const handleSubmitCmnt = (formData) => {
        onSubmit(formData.content);
        reset();
    }

    return (
        <form action="#" className={styles.create_comment_form} onSubmit={handleSubmit(handleSubmitCmnt)}>
            <textarea 
                {...register("content")}
                placeholder="Type your comment here." 
                tabIndex="1"
                autoFocus
            ></textarea>
            <Button 
                type="submit" 
                tabIndex="2" 
                disabled={!watch("content")}
                small
            >
                Post Comment
            </Button>
        </form>
    )
}

export default CreateCommentForm