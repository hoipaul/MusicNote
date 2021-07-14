import React, {useState} from 'react';
import axios from 'axios';
import {Link, useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import '../components/SignupForm.css';

export default function SignupForm() {
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');
    const [registerSuccess, toggleRegisterSuccess] = useState(false);

    const history = useHistory();
    const {handleSubmit, register, formState: {errors, isDirty, isValid}} = useForm({mode: "onChange"});

    async function onSubmit(data) {
        setError('');
        toggleLoading(true);

        console.log(data);

        try {
            const result = await axios.post(`https://polar-lake-14365.herokuapp.com/api/auth/signup`, {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ['user', 'admin']
            });

            console.log(result);

            toggleRegisterSuccess(true);

            setTimeout(() => {
                history.push('/login');
            }, 2000);
        } catch (e) {
            console.error(e);
            setError(`Registratie mislukt. Probeer a.u.b. opnieuw (${e.message})`);

        }

        toggleLoading(false);
    }

    return (
        <div className="signup-field">
            <h2>En krijg toegang tot alle handige functies!</h2>
            <fieldset className="fieldset">
                <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email-field">
                        E-mailadres:
                        <input
                            type="email"
                            id="email-field"
                            name="email"
                            {...register("email",
                                {
                                    required: {
                                        value: true,
                                        message: 'Vul een e-mailadres in',
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: 'Vul a.u.b. een geldig e-mailadres in',
                                    },
                                })}
                        />
                        {errors.email && <p className="error-message">{errors.email.message}</p>}

                    </label>

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
                                        message: 'Vul een gebruikersnaam in',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'De gekozen gebruikersnaam dient minimaal 6 karakters bevatten'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'De gekozen gebruikersnaam mag maximaal 10 karakters bevatten'
                                    },
                                })}

                        />
                        {
                            errors.username && <p className="error-message">{errors.username.message}</p>
                        }

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
                                        message: 'Vul een wachtwoord in',
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Het gekozen  wachtwoord dient minimaal 6 karakters bevatten'
                                    },
                                    maxLength: {
                                        value: 10,
                                        message: 'Het gekozen wachtwoord mag maximaal 10 karakters bevatten'
                                    },
                                    pattern: {
                                        value: /[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/,
                                        message: 'Het gekozen wachtwoord dient minimaal 1 speciaal teken te bevatten (zoals % of $)',
                                    },
                                })}
                        />
                        {errors.password && <p className="error-message">{errors.password.message}</p>}

                    </label>
                    <button
                        type="submit"
                        className="form-button"
                        disabled={!isDirty || !isValid || loading}
                    >
                        {loading ? 'Versturen...' : 'Maak account aan'}
                    </button>
                    {
                        registerSuccess === true &&
                        <p>Registeren is gelukt! Je wordt nu doorgestuurd naar de inlog pagina!</p>
                    }
                    {
                        error && <p className="error-message">{error}</p>
                    }
                </form>
                <p>Heb je al een account? Je kunt je dan <Link to="/Login">hier</Link> inloggen.</p>
            </fieldset>
        </div>
    )
};