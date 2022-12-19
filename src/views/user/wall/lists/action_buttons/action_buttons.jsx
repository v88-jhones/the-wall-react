import CommentIcon from "../../../../../assets/images/message.svg";
import ActiveCommentIcon from "../../../../../assets/images/message-blue.svg";
import EditIcon from "../../../../../assets/images/pencil-write.svg";
import DeleteIcon from "../../../../../assets/images/delete.svg";
import UserIcon from "../../../../../assets/images/user.svg";
import styles from "./action_buttons.module.scss";

export const CommentButton = (props) => {
    const {onClick, count = 0, active = false} = props;

    return (
        <button
            type="button"
            className={`${active && styles.active }`}
            onClick={onClick}
            icon={CommentIcon}
        >
            <img src={active ? ActiveCommentIcon : CommentIcon} alt={"message icon"} />
            <p>{count + " Comment"}</p>
        </button>
    );
}

export const EditButton = ({onClick}) => {
    return (
        <button 
            type="button"
            onClick={onClick}
            className={styles.active}
            icon={EditIcon}
        >
            <img src={EditIcon} alt={"pencil and paper icon"} />
            <p>Edit</p>
        </button>
    );
}

export const DeleteButton = ({onClick}) => {
    return (
        <button 
            type="button"
            onClick={onClick}
            icon={DeleteIcon}
        >
            <img src={DeleteIcon} alt={"trash bin icon"} />
            <p>Delete</p>
        </button>
    );
}

export const UserButton = (props) => {
    const {
        onClick, 
        name="You", 
        time="Few seconds ago"
    } = props;

    return (
        <button 
            type="button"
            onClick={onClick}
            icon={UserIcon}
        >
            <img src={UserIcon} alt={"user icon"} />
            <p><span>{name}</span> - {time}</p>
        </button>
    );
}