import React from "react";
import artist_banner from "../assets/artist_banner.jpg";
import Footer from "../components/Footer";
import '../pages/About.css';

export default function About() {
    return (
        <>
            <h1>Aanvullende informatie over dit project</h1>
            <article>
                <fieldset className="fieldset-about">
                    <p>
                        Deze app is ontworpen door Paul Hermans, als eindopdracht voor de opleiding front-end
                        development van NOVI Hogeschool.
                    </p>
                    <p>
                        Veel plezier met het gebruik van MusicNote &#8482;!
                    </p>
                </fieldset>
                <fieldset className="fieldset-about">
                    <p>
                        Mede mogelijk gemaakt door MusicBrainz &#38; NOVI.
                    </p>
                    <p>
                        Originele informatieve teksten bij de muziekinfo bedacht en geschreven door Paul.
                    </p>
                </fieldset>
                <fieldset className="fieldset-about">
                    <p>
                        <p>All rights reserved &#169; 2021</p>
                    </p>
                </fieldset>
            </article>
            <figure>
                <img id="artist_banner" src={artist_banner} alt="artist banner"
                     title="v.l.n.r.: Prince - Mark Knopfler - Guns 'n Roses - James Brown - Whitney Houston - Robbie Williams"/>
            </figure>
            <figure>
                <img id="random" src="https://source.unsplash.com//1200x400/?band" alt="band"
                     title="Bedankt voor het gebruiken van de MusicNote &#8482; App!"/>
            </figure>
            <Footer/>
        </>
    );
};