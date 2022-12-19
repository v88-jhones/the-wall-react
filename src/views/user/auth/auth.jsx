import { useState } from "react";
import LoginForm from "./forms/login_form"
import RegisterForm from "./forms/register_form";
import IllustrationImage from "../../../assets/images/main.svg";
import styles from "./auth.module.scss";

function Auth(){

    const [showLoginForm, setShowLoginForm] = useState(true);

    const toggleForm = () => {
        setShowLoginForm(prevState => !prevState);
    }

    return (
        <div className={styles.auth_container}>
            <div className={styles.form_container}>
                {
                    showLoginForm
                        ? <LoginForm onSwitchClick={toggleForm} />
                        : <RegisterForm onSwitchClick={toggleForm} />
                }
            </div>
            <div className={styles.illustration_container}>
                <img src={IllustrationImage} alt="Illustration of a man holding a paper" />
            </div>
        </div>
    );
}

export default Auth;