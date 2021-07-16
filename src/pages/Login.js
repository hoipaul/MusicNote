import React from 'react';
import bowie from "../assets/artists/bowie.jpeg";
import jackson from "../assets/artists/jackson.jpg";
import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import LoginForm from '../components/forms/LoginForm'
import '../pages/Login.css';

export default function Login() {

    return (
        <>
            <h1>Inloggen bij MusicNote &#8482;</h1>
            <div className="login-container">
                <div className="login-artists">
                    <Link to="./bowie">
                    <img id="Bowie" src={bowie} alt="Bowie" title="David Bowie tijdens zijn 'A reality tour', Point Theatre, Dublin, 2003"/>
                    </Link>
                </div>
                <div>
                    <LoginForm/>
                    <div className="click-box">
                    <h1>☞</h1><h3 id="click-artist-login">Klik op een afbeelding voor meer informatie over de artiest!</h3>
                    </div>
                </div>
                <div className="login-artists">
                    <Link to="./jackson">
                    <img id="Jackson" src={jackson} alt="Jackson" title="Michael Jackson tijdens zijn 'Dangerous' wereldtournee, 1992"/>
                    </Link>
                    </div>
            </div>
            <Footer/>
        </>
    );
};