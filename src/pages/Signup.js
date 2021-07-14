import React from 'react';
import {Link} from 'react-router-dom';
import Elvis from "../assets/elvis.jpg";
import Prince from "../assets/prince.jpg";
import ArtistPrince from "./ArtistPrince";
import SignupForm from "../components/SignupForm";
import Footer from "../components/Footer";
import '../pages/Signup.css';

export default function Signup() {

    return (
        <>
            <h1>Meld je aan bij MusicNote &#8482;</h1>
            <div className="signup-container">
                <section className="form-container">
                    <SignupForm/>
                </section>
                <fieldset>
                    <figure className="artists">
                        <Link to="./prince">
                            <img id="Prince" src={Prince} alt="Prince"/>
                        </Link>
                        <Link to="./elvis">
                        <img id="Elvis" src={Elvis} alt="Elvis"/>
                        </Link>
                    </figure>
                </fieldset>
            </div>
            <Footer/>
        </>
    );
};