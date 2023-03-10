import { useState } from "react";
import { Button } from "../../../global/components/button";
import styles from "./form.module.scss";

function LoginForm({ onSignUpClick }){
    const [formData, setFormData] = useState({email: "", password: ""});
    const [errors, setErrors] = useState({email: "", password: ""});

    const handleChange = (event) => {
        setFormData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateData();
    };

    const validateData = () => {
        if(formData.email === ""){
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Email cannot be empty"
            }));
        }
        else if(formData.email.split("@")[1] == null){
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Email must be valid"
            }));
        }
        else if (formData.email.split("@")[1].split(".")[1] == null){
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Email must be valid"
            }));
        }
        else{
            setErrors(prevErrors => ({
                ...prevErrors,
                email: ""
            }));
        }
    
        if(formData.password === ""){
            setErrors(prevErrors => ({
                ...prevErrors,
                password: "Password cannot be empty"
            }));
        }
        else if(formData.password.length < 8){
            setErrors(prevErrors => ({
                ...prevErrors,
                password: "Password must be atleast 8 characters"
            }));
        }
        else{
            setErrors(prevErrors => ({
                ...prevErrors,
                password: ""
            }));
        }
    };

    return (
        <form action="#" className={styles.form} id="login_form" onSubmit={handleSubmit}>
            <h4>The Wall</h4>
            <h1>Log In</h1>
            <div className={styles.form_group}>
                <label htmlFor="email">Email</label>
                <input 
                    tabIndex="1" 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="youremail@gmail.com" 
                    value={formData.email}
                    onChange={handleChange}    
                    className={ errors.email && styles.error }
                />
                { errors.email && <p className={styles.form_error}>{errors.email}</p> }
            </div>
            <div className={styles.form_group}>
                <label htmlFor="password">Password <a href="/">Forgot Password ?</a></label>
                <input 
                    tabIndex="2" 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={formData.password}
                    onChange={handleChange}
                    className={ errors.password && styles.error }
                />
                { errors.password && <p className={styles.form_error}>{errors.password}</p> }
            </div>
            <Button tabIndex="3" type="submit">Sign In</Button>
            <p className={styles.form_footer}>
                I don't have an account ?
                <button 
                    type="button" 
                    className={styles.form_link} 
                    onClick={onSignUpClick} 
                    tabIndex="4"
                >
                    Sign Up
                </button>
            </p>
        </form>
    );
}

export default LoginForm;