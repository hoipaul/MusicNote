import React from "react";
import dua_lipa from "../assets/albumCovers/dua_lipa.jpg";
import en_door from "../assets/albumCovers/en_door.jpg";
import fine_line from "../assets/albumCovers/fine_line.jpg";
import lars from "../assets/albumCovers/lars.jpeg";
import sour from "../assets/albumCovers/sour.jpg";
import AlbumTile from "../components/AlbumTile";
import Footer from "../components/Footer";
import ScrollToTop from "../helpers/ScrollToTop";
import '../pages/Home.css';

export default function HomePage() {
    return (
        <>
            <figure className="artist">
                <img id="home-image" src="https://source.unsplash.com//1000x400/?concert" alt="concert"
                     title="Welkom bij MusicNote &#8482;"/></figure>
            <div id="page-container">
                <h1>Welkom bij de MusicNote App &#8482;</h1>
                <h2>Voor liefhebbers van muziek van alle genres!
                </h2>
                <p>Zoek informatie op over jouw favoriete artiest!</p>
                <p>Welke muziek vind jij vandaag? Het beste album uit de jaren '90 of je favoriete nummer
                    aller tijden?</p>
                <h3>Navigeer in het menu <button id="scroll-button"
                                                 type=" submit"
                                                 onClick={ScrollToTop}>HIER BOVEN</button> naar de pagina die je wil
                    bezoeken.
                </h3>

                <fieldset id="popular-container">
                    <h2 id="popular-text">Populaire albums van dit moment zijn:</h2>
                    <section id="covers">
                        <AlbumTile
                            URL={"https://www.dualipa.com"}
                            img={dua_lipa}
                            title="Dua Lipa - Dua Lipa"
                        />
                        <AlbumTile
                            URL={"https://www.snollebollekes.com"}
                            img={en_door}
                            title="Snollebollekes - ... En door"
                        />
                        <AlbumTile
                            URL={"https://www.harrystyles.com"}
                            img={fine_line}
                            title="Harry Styles - Fine line"
                        />
                        <AlbumTile
                            URL={"https://www.cloud9music.nl/snelle"}
                            img={lars}
                            title="Snelle - Lars"
                        />
                        <AlbumTile
                            URL={"https://www.oliviarodrigo.com"}
                            img={sour}
                            title="Olivia Rogrido - SOUR"
                        />
                        <div className="click-image">
                        </div>
                    </section>
                </fieldset>
                <div className="click-box">
                <h1 id="hand-symbol">☞</h1><h3 id="click-image-home">Klik op een album om naar de website van de artiest te gaan</h3>
                </div>
            </div>
            <Footer/>


        </>
    )
};