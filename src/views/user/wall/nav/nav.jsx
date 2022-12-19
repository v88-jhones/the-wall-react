import { Link } from "react-router-dom";
import styles from "./nav.module.scss";

function Nav (props){
    const {
        title="Title",
        userName="User"
    } = props;
    return (
        <nav className={styles.nav}>
            <div className={"container"}>
                <h4>{title}</h4>
                <p>Welcome, {userName}!</p>
                <Link to="/">Logout</Link>
            </div>
        </nav>
    );
}

export default Nav;