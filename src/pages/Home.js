import React from "react";
import concert from "../assets/concert.jpeg"
// import doowop from "../assets/albumCovers/doowop.jpg"
import dua_lipa from "../assets/albumCovers/dua_lipa.jpg"
import en_door from "../assets/albumCovers/en_door.jpg"
import fine_line from "../assets/albumCovers/fine_line.jpg"
import lars from "../assets/albumCovers/lars.jpeg"
import sour from "../assets/albumCovers/sour.jpg"
import AlbumTile from "../components/AlbumTile";
import '../pages/Home.css';
import RandomImage from "../components/RandomImage";

function HomePage() {
    return (
        <>
            <figure className="artist">
                <img id="homeImage" src={concert} alt="concert"/>
            </figure>
            <div id="page-container">
                <h1>Welkom bij de MusicNote App &#8482; van Paul</h1>
                <h2>Voor liefhebbers van muziek van alle genres!
                </h2>
                <p>Zoek informatie op over jouw favoriete artiest!
                    <p>Welke muziek vind jij vandaag?</p>
                    <p>Navigeer in het menu hierboven handig naar de pagina die je wil bezoeken.</p>
                </p>
                <p>Populaire albums van dit moment zijn:</p>
                <fieldset>
                    <section id="covers">
                        <AlbumTile
                            img={dua_lipa}
                            onClick={'http://www.dualipa.com'}
                        />
                        <AlbumTile
                            img={en_door}
                        />
                        <AlbumTile
                            img={fine_line}
                        />
                        <AlbumTile
                            img={lars}
                        />
                        <AlbumTile
                            img={sour}
                        />
                        {/*<AlbumTile*/}
                        {/*    img={doowop}*/}
                        {/*/>*/}
                    </section>
                </fieldset>
                {/*<RandomImage/>*/}
            </div>
        </>
    )
}

export default HomePage;