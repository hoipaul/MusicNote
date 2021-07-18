import React from 'react';
import {Link} from "react-router-dom";
import './AlbumInfo.css';

export default function AlbumInfo({
                                      img,
                                      imgAlt,
                                      imgTitle,
                                      infoText,
                                      artist,
                                      album,
                                      year,
                                      genre,
                                      label,
                                      track1,
                                      playtime1,
                                      track2,
                                      playtime2,
                                      track3,
                                      playtime3,
                                      track4,
                                      playtime4,
                                      track5,
                                      playtime5,
                                      track6,
                                      playtime6,
                                      track7,
                                      playtime7,
                                      track8,
                                      playtime8,
                                      track9,
                                      playtime9,
                                      track10,
                                      playtime10,
                                      track11,
                                      playtime11,
                                      track12,
                                      playtime12,
                                      track13,
                                      playtime13,
                                      track14,
                                      playtime14,
                                      returnToArtist,
                                      artistPageReturn,
                                      trackLink
                                  }) {
    return (
        <>
            <h1>Uitgelicht album:</h1>
            <div className="album-result-container">
                <div className="album-cover">
                    <img id="album-info" src={img} alt={imgAlt} title={imgTitle}/>
                </div>
                <div className="album-specs">
                    <h2>Artiest: {artist}</h2>
                    <h2>Album: {album}</h2>
                    <h3>Jaar: {year}</h3>
                    <h3>Genre: {genre}</h3>
                    <h3>Label: {label}</h3>
                    <h3>Albumfeitjes:</h3>
                    <div className="info-text">{infoText}</div>
                </div>
                <div className="tracklist">
                    <h3>Tracklist:</h3>
                    <p>1. {track1} {playtime1}</p>
                    <p>2. {track2} {playtime2}</p>
                    <p>3. {track3} {playtime3}</p>
                    <p>4. {track4} {playtime4}</p>
                    <p>5. {track5} {playtime5}</p>
                    <p>6. {track6} {playtime6}</p>
                    <p>7. {track7} {playtime7}</p>
                    <p>8. {track8} {playtime8}</p>
                    <p>9. {track9} {playtime9}</p>
                    <Link to={trackLink}><p>{track10} {playtime10}</p></Link>
                    <p>{track11} {playtime11}</p>
                    <p>{track12} {playtime12}</p>
                    <p>{track13} {playtime13}</p>
                    <p>{track14} {playtime14}</p>
                </div>
            </div>
            <div className="click-box">
                <h1>☞</h1><h3 id="return-info"> Terug naar informatie over {returnToArtist}? Klik dan <Link
                to={artistPageReturn}>hier!</Link></h3>
            </div>
        </>
    );
};