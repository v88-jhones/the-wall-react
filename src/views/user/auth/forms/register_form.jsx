import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../global/components/button";
import styles from "./form.module.scss";

function RegisterForm({ onSwitchClick }){

    const [formData, setFormData] = useState({email: "", password: "", confirm_password: ""});
    const [errors, setErrors] = useState({email: "", password: ""});

    const handleChange = (event) => {
        setFormData(prevFormData => ({
            ...prevFormData,
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
            }))
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

        if(formData.confirm_password !== formData.password){
            setErrors(prevErrors => ({
                ...prevErrors,
                confirm_password: "Password must match"
            }));
        }
        else{
            setErrors(prevErrors => ({
                ...prevErrors,
                confirm_password: ""
            }));
        }
    };

    return (
        <form action="/" className={styles.form} onSubmit={handleSubmit}>
            <h4>The Wall</h4>
            <h1>Register</h1>
            <div className={styles.form_group}>
                <label htmlFor="email">Email</label>
                <input 
                    tabIndex="1" 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="youremail@gmail.com" 
                    onChange={handleChange}    
                    className={ errors.email && styles.error }
                />
                { errors.email && <p className={styles.form_error}>{errors.email}</p> }
            </div>
            <div className={styles.form_group}>
                <label htmlFor="password">Password</label>
                <input 
                    tabIndex="2" 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={handleChange}    
                    className={ errors.password && styles.error }
                />
                { errors.password && <p className={styles.form_error}>{errors.password}</p> }
            </div>
            <div className={styles.form_group}>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                    tabIndex="3" 
                    type="password" 
                    name="confirm_password" 
                    id="confirm_password" 
                    onChange={handleChange}    
                    className={ errors.confirm_password && styles.error }
                />
                { errors.confirm_password && <p className={styles.form_error}>{errors.confirm_password}</p> }
            </div>
            <p className={styles.form_policy}>
                By creating an account, you agree with The Wall's 
                <Link to="/"> Privacy Policy</Link> and 
                <Link onClick={onSwitchClick} to="/"> Terms of Use</Link>.
            </p>
            <Button tabIndex="4" type="submit">
                    Sign Up
            </Button>
            <p className={styles.form_footer}>
                Already have an account ? 
                <button 
                    type="button" 
                    className={styles.form_link} 
                    onClick={onSwitchClick} 
                    tabIndex="5"
                >
                    Sign In
                </button>
            </p>
        </form>
    );
}

export default RegisterForm;