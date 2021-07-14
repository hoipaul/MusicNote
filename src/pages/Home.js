import React from "react";
import concert from "../assets/concert.jpeg";
import dua_lipa from "../assets/albumCovers/dua_lipa.jpg";
import en_door from "../assets/albumCovers/en_door.jpg";
import fine_line from "../assets/albumCovers/fine_line.jpg";
import lars from "../assets/albumCovers/lars.jpeg";
import sour from "../assets/albumCovers/sour.jpg";
import AlbumTile from "../components/AlbumTile";
import Footer from "../components/Footer";
import '../pages/Home.css';
import RandomImage from "../components/RandomImage";

export default function HomePage() {
    return (
        <>
            <figure className="artist">
                <img id="homeImage" src={concert} alt="concert"/>
            </figure>
            <div id="page-container">
                <h1>Welkom bij de MusicNote App &#8482;</h1>
                <h2>Voor liefhebbers van muziek van alle genres!
                </h2>
                <p>Zoek informatie op over jouw favoriete artiest!</p>
                <p>Welke muziek vind jij vandaag? Je favoriete album uit de jaren '90 of je favoriete nummer
                    aller tijden?</p>
                <h3>Navigeer in het menu hierboven naar de pagina die je wil
                    bezoeken.</h3>
                <fieldset id="popular-container">
                    <h2 id="popular-text">Populaire albums van dit moment zijn:</h2>
                    <section id="covers">
                        <AlbumTile
                            URL={"https://www.dualipa.com"}
                            img={dua_lipa}
                        />
                        <AlbumTile
                            URL={"https://www.snollebollekes.com"}
                            img={en_door}
                        />
                        <AlbumTile
                            URL={"https://www.harrystyles.com"}
                            img={fine_line}
                        />
                        <AlbumTile
                            URL={"https://www.cloud9music.nl/snelle"}
                            img={lars}
                        />
                        <AlbumTile
                            URL={"https://www.oliviarodrigo.com"}
                            img={sour}
                        />
                        <Footer/>
                    </section>
                </fieldset>
                {/*<RandomImage/>*/}
            </div>
        </>
    )
};