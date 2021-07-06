import React from "react";
import '../pages/About.css';
import spotlight from "../assets/spotlights.jpeg";

function About() {
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
                    Mede mogelijk gemaakt door Spotify &#169;
                    All rights reserved &#169; 2021
                </p>
            </article>
            <figure>
                <img id="spotlight" src={spotlight} alt="spotlight"/>
            </figure>

        </>
    );
}

export default About;