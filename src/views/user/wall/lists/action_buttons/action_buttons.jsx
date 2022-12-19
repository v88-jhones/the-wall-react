import PencilIcon from "../../../../../assets/images/pencil-write.svg";
import DeleteIcon from "../../../../../assets/images/delete.svg";
import UserIcon from "../../../../../assets/images/user.svg";
import CommentIcon from "../../../../../assets/images/message.svg";
import ActiveCommentIcon from "../../../../../assets/images/message-blue.svg";
import styles from "./action_buttons.module.scss";

const Button = (props) => {
    const {
        primaryText, 
        text, 
        icon, 
        bigIcon = false,
        active, 
        onClick
    } = props;

    return (
        <button type="button" className={`${active && styles.active}`} onClick={onClick}>
            <img src={icon} alt={text + "-icon"} className={bigIcon && styles.bigIcon} />
            <p><span>{primaryText}</span> {text}</p>
        </button>
    );
};

export const EditButton = ({onClick}) => {
    return (
        <Button 
            text="Edit" 
            icon={PencilIcon} 
            bigIcon
            active={true} 
            onClick={onClick} 
        />
    );
};

export const DeleteButton = ({onClick}) => {
    return (
        <Button 
            text="Delete" 
            icon={DeleteIcon} 
            onClick={onClick} 
        />
    );
};

export const UserButton = ({onClick, userName = "You"}) => {
    return (
        <Button 
            primaryText={userName}
            text=" - Few seconds ago" 
            icon={UserIcon} 
            onClick={onClick} 
        />
    );
};

export const CommentButton = ({onClick, count, active}) => {
    return (
        <Button 
            text={count + " Comment"} 
            icon={active ? ActiveCommentIcon : CommentIcon} 
            onClick={onClick} 
            active={active}
        />
    )
};


