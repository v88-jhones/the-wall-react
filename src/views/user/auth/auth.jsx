import { useState } from "react";
import LoginForm from "./components/login_form"
import RegisterForm from "./components/register_form";
import IllustrationImage from "../../../assets/images/main.svg";
import styles from "./auth.module.scss";

function Auth(){

    const [show_login_form, set_show_login_form] = useState(true);

    const toggle_form = () => {
        set_show_login_form(prevState => !prevState);
    }

    return (
        <div className={styles.auth_container}>
            <div className={styles.form_container}>
                {
                    show_login_form
                        ? <LoginForm onSwitchClick={toggle_form} />
                        : <RegisterForm onSwitchClick={toggle_form} />
                }
            </div>
            <div className={styles.illustration_container}>
                <img src={IllustrationImage} alt="Illustration of a man holding a paper" />
            </div>
        </div>
    );
}

export default Auth;