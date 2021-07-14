import React from 'react';
import Bowie from "../assets/bowie.jpeg";
import Jackson from "../assets/jackson.jpg";
import {Link} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";
import '../pages/Login.css';

export default function Login() {

    return (
        <>
            <h1>Inloggen bij MusicNote &#8482;</h1>
            <div className="login-container">
                <div className="login-artists">
                    <Link to="./bowie">
                    <img id="Bowie" src={Bowie} alt="Bowie"/>
                    </Link>
                </div>
                <div>
                    <LoginForm/>
                </div>
                <div className="login-artists">
                    <Link to="./jackson">
                    <img id="Jackson" src={Jackson} alt="Jackson"/>
                    </Link>
                    </div>
            </div>
            <Footer/>
        </>


    );
};