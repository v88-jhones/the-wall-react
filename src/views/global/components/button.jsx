import styles from "./button.module.scss";

export const Button = (props) => {    

    const {
        children, 
        small=false, 
        onClick, 
        type="button",
        tabIndex="0",
        disabled=false
    } = props;
    
    return (
        <button 
            type={type} 
            className={small ? styles.btn_secondary : styles.btn_primary} 
            onClick={onClick}
            disabled={disabled}
            tabIndex={tabIndex}
        >
            {children}
        </button>
    );
}

export const LinkButton = (props) => {
    const { children, tabIndex="0", onClick } = props;

    return (
        <button 
            type="button"
            className={styles.link_button} 
            onClick={onClick}
            tabIndex={tabIndex}
        >
            {children}
        </button>
    )
} 