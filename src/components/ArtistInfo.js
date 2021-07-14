import React from "react";
import {Link} from 'react-router-dom';
import '../components/ArtistInfo.css';

export default function ArtistInfo({name, fullName, birthPlace, lifeSpan, nickNames, infoText, URL, URLname, img}) {
    return (
        <>
            <div className="artist-container">
                <div className="artist-info">
                    <h1>{name}</h1>
                    <h2>Volledige naam: {fullName}
                    </h2>
                    <h3>Ook bekend als: {nickNames}
                    </h3>
                    <h3>Geboorteplaats: {birthPlace}
                    </h3>
                    <h3>{lifeSpan}
                    </h3>
                    <p>{infoText}</p>
                    <h2>Offici&#235;le website: <a href={URL}>{URLname}</a>
                    </h2>
                    <h3><Link
                        to="/login">Log in </Link>bij MusicNote &#8482; en zoek meer informatie op over jouw
                        favoriete
                        artiest via het <Link
                            to="/search">ZOEKMENU</Link> !</h3>
                </div>
                <div className="artist-image">
                    <img id="image" src={img} alt="info"/>
                </div>
            </div>
        </>
    )
};