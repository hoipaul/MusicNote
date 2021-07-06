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

function HomePage() {
    return (
        <>
            <figure className="artist">
                <img id="homeImage" src={concert} alt="concert"/>
            </figure>
            <div id="page-container">
                <h1>Welkom bij de MusicNote App van Paul</h1>
                <h2>Voor liefhebbers van muziek van alle genres!
                </h2>
                <p>Zoek informatie op over jouw favoriete artiest!
                    Meer informatie over albums, tracks en genres.
                </p>
                <p>Populaire albums van dit moment zijn:</p>
                <fieldset>
                    <section>
                        <AlbumTile
                            img={dua_lipa}
                            click="href='http://www.dualipa.com'"
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
            </div>
        </>
    )
}

export default HomePage;