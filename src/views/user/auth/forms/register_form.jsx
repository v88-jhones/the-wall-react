import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Button } from "../../../global/components/button";
import styles from "./form.module.scss";

const registerSchema = yup.object({
    Email: yup.string().trim().required().email(),
    Password: yup.string().trim().required("Password cannot be empty.").min(8),
    confirm_password: yup.string().trim().oneOf([yup.ref("Password")], "Password must match")
}).required();

function RegisterForm({ onSignInClick }){
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(registerSchema)});

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <form action="/" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h4>The Wall</h4>
            <h1>Register</h1>
            <div className={styles.form_group}>
                <label htmlFor="email">Email</label>
                <input 
                    tabIndex="1" 
                    type="text" 
                    {...register("Email")}
                    id="email" 
                    placeholder="youremail@gmail.com" 
                    className={ errors.Email && styles.error }
                />
                { errors.Email && <p className={styles.form_error}>{errors.Email?.message}</p> }
            </div>
            <div className={styles.form_group}>
                <label htmlFor="password">Password</label>
                <input 
                    tabIndex="2" 
                    type="password" 
                    {...register("Password")} 
                    id="password" 
                    className={ errors.Password && styles.error }
                />
                { errors.Password && <p className={styles.form_error}>{errors.Password?.message}</p> }
            </div>
            <div className={styles.form_group}>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input 
                    tabIndex="3" 
                    type="password" 
                    {...register("confirm_password")} 
                    id="confirm_password" 
                    className={ errors.confirm_password && styles.error }
                />
                { errors.confirm_password && <p className={styles.form_error}>{errors.confirm_password?.message}</p> }
            </div>
            <p className={styles.form_policy}>
                By creating an account, you agree with The Wall's 
                <Link to="/"> Privacy Policy</Link> and 
                <Link to="/"> Terms of Use</Link>.
            </p>
            <Button tabIndex="4" type="submit">
                    Sign Up
            </Button>
            <p className={styles.form_footer}>
                Already have an account ? 
                <button 
                    type="button" 
                    className={styles.form_link} 
                    onClick={onSignInClick} 
                    tabIndex="5"
                >
                    Sign In
                </button>
            </p>
        </form>
    );
}

export default RegisterForm;