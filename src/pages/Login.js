import React from 'react';
import Bowie from "../assets/bowie.jpeg";
import Jackson from "../assets/jackson.jpg"
import LoginForm from "../components/LoginForm";
import '../pages/Login.css';

function Login() {

    return (
        <>
            <h1>Inloggen bij MusicNote &#8482;</h1>
            <p>Log hier in en zoek naar al jouw favoriete muziek!</p>
            <LoginForm/>
            <figure className="artistSearch">
                <img id="Bowie" src={Bowie} alt="Bowie"/>
                <img id="Jackson" src={Jackson} alt="Jackson"/>
            </figure>
        </>
    );
}

export default Login;