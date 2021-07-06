import React from 'react';
import Elvis from "../assets/elvis.jpg";
import Prince from "../assets/prince.jpg";
import '../pages/Signup.css';
import SignupForm from "../components/SignupForm";

function Signup() {

    return (
        <>
            <SignupForm/>
            <fieldset>
                <figure className="artists">
                    <img id="Elvis" src={Elvis} alt="Elvis"/>
                    <img id="Prince" src={Prince} alt="Prince"/>
                </figure>
            </fieldset>
        </>
    );
}

export default Signup;