import NoMessageIcon from "../../../../assets/images/no-message.svg";
import styles from "./no_message.module.scss"

function NoMessage() {
    return (
        <div id={styles.no_message}>
            <img src={NoMessageIcon} alt="Empty basket" />
            <p>No Posted Message Yet</p>
        </div>
    )
}

export default NoMessage