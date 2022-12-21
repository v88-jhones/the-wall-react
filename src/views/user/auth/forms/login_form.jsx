import { Button } from "../../../global/components/button";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import styles from "./form.module.scss";


const loginSchema = yup.object({
    Email: yup.string().trim().required().email(),
    Password: yup.string().trim().required(),
}).required();

function LoginForm({ onSignUpClick }){
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(loginSchema)});

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <form action="#" className={styles.form} id="login_form" onSubmit={handleSubmit(onSubmit)}>
            <h4>The Wall</h4>
            <h1>Log In</h1>
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
                <label htmlFor="password">Password <a href="/">Forgot Password ?</a></label>
                <input 
                    tabIndex="2" 
                    type="password" 
                    {...register("Password")} 
                    id="password" 
                    className={ errors.Password && styles.error }
                />
                { errors.Password && <p className={styles.form_error}>{errors.Password?.message}</p> }
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