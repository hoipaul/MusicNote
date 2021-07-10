import axios from "axios";
import {useForm} from "react-hook-form";
import React, {useContext, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {authContext} from "../context/AuthContext";//deze regel aan -> inlogmelding weg
import '../components/LoginForm.css';

function LoginForm() {

    const {handleSubmit, register, formState: {errors, isDirty, isValid}} = useForm({mode: "onChange"});
    const [error, setError] = useState('');
    // const {login} = useContext(authContext);//deze regel -> inlogmelding weg
    const history = useHistory(); //toegevoegd
    const [loginSuccess, toggleLoginSuccess] = useState(false);

    async function onSubmit(data) {
        console.log(data);

        try {
            const result = await axios.post(`https://polar-lake-14365.herokuapp.com/api/auth/signin`, data);
            console.log(result);
            // login(result.data.accessToken);// deze regel -> inlogmelding weg

            toggleLoginSuccess(true);
            setTimeout(() => {
                history.push('/profile');
            }, 2000); // dit blokje ook toegevoegd

        } catch (e) {
            console.error(e);
            setError(`Inloggen mislukt. Probeer a.u.b. opnieuw (${e.message})`);
        }
    }

    return (
        <fieldset>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        name="username"
                        {...register("username",
                            {
                                required: {
                                    value: true,
                                    message: 'Vul au.b. een gebruikersnaam in',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Een geldige gebruikersnaam bevat minimaal 6 karakters'
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Een geldige gebruikersnaam bevat maximaal 10 karakters'
                                },
                            })}
                    />
                    {errors.username && <p className="error-message">{errors.username.message}</p>}
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="text"
                        id="password-field"
                        name="password"
                        {...register("password",
                            {
                                required: {
                                    value: true,
                                    message: 'Vul a.u.b. een wachtwoord in',
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Een geldig wachtwoord bevat tenminste 6 karakters',
                                },
                                maxLength: {
                                    value: 10,
                                    message: 'Een geldig wachtwoord bevat maximaal 10 karakters',
                                },
                            })}
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </label>
                <button
                    type="submit"
                    className="form-button"
                    disabled={!isDirty || !isValid}
                >
                    Inloggen
                </button>
                {loginSuccess === true &&
                <p>Inloggen is gelukt! Je wordt nu doorgestuurd naar jouw profielpagina!</p>}
                {error && <p className="error-message">{error}</p>}
            </form>
            <p>Een eigen gratis account aanmaken? Klik dan <Link to="/signup">hier</Link>.</p>
        </fieldset>
    )
}

export default LoginForm;