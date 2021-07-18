import React from 'react';
import {Link} from 'react-router-dom';
import elvis from "../assets/artists/elvis.jpg";
import prince from "../assets/artists/prince.jpg";
import SignupForm from "../components/forms/SignupForm";
import Footer from "../components/Footer";
import '../pages/Signup.css';

export default function Signup() {

    return (
        <>
            <h1>Meld je aan bij MusicNote &#8482;</h1>
            <div className="signup-container">
                <section className="form-container">
                    <SignupForm/>
                    <div className="click-box">
                    <h1>☞</h1><h3 id="click-artist-signup">Klik op een afbeelding voor meer informatie over de artiest!</h3>
                    </div>
                </section>
                <fieldset>
                    <figure className="artists">
                        <Link to="./prince">
                            <img id="Prince" src={prince} alt="Prince" title="Prince in het Sportpaleis Antwerpen, 2009. KLIK VOOR MEER INFO!"/>
                        </Link>
                        <Link to="./elvis">
                        <img id="Elvis" src={elvis} alt="Elvis" title="Elvis Presley tijdens zijn concert 'Aloha in Hawaii', 1973. KLIK VOOR MEER INFO!"/>
                        </Link>
                    </figure>
                </fieldset>
            </div>
            <Footer/>
        </>
    );
};