import React from "react";
import '../pages/About.css';
import spotlight from "../assets/spotlights.jpeg";
import artist_banner from "../assets/artist_banner.jpg";
import Footer from "../components/Footer";

export default function About() {
    return (
        <>
            <h1>Aanvullende informatie over dit project</h1>
            <article>
                <p>
                    Deze app is ontworpen door Paul Hermans, als eindopdracht voor de opleiding front-end
                    development van NOVI Hogeschool.
                </p>
                <p>
                    Veel plezier met het gebruiken ervan!
                </p>
                <p>
                    Mede mogelijk gemaakt door MusicBrainz &#169;
                </p>
                <p>
                    All rights reserved &#169; 2021
                </p>
            </article>
            <figure>
                <img id="artist_banner" src={artist_banner} alt="artist banner"/>
            </figure>
            <figure>
                <img id="spotlight" src={spotlight} alt="spotlight"/>
            </figure>
            <Footer/>
        </>
    );
};