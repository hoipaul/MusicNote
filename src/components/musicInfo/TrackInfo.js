import React from 'react';
import {Link} from "react-router-dom";
import './TrackInfo.css';

export default function TrackInfo({
                                      img,
                                      imgAlt,
                                      imgTitle,
                                      infoText,
                                      trackName,
                                      composers,
                                      producers,
                                      infoImg,
                                      infoImgAlt,
                                      infoImgTitle,
                                      returnToAlbum,
                                      artistPageReturn,

                                  }) {

    return (
        <>
            <h1>Uitgelichte single:</h1>
            <div className="album-result-container">
                <div className="single-container">
                    <img id="single-info" src={img} alt={imgAlt} title={imgTitle}/>
                </div>
                <div className="single-specs">
                    <h2>{trackName}</h2>
                    <h3>Geschreven door {composers}</h3>
                    <h3>Producers: {producers}</h3>
                    <div className="info-text">
                        {infoText}
                    </div>
                    <div>
                        <img id="info-image" src={infoImg} alt={infoImgAlt} title={infoImgTitle}/>
                    </div>
                </div>
            </div>
            <div className="click-box">
                <h1>☞</h1><h3 id="return-info"> Terug naar het album {returnToAlbum}? Klik dan <Link
                to={artistPageReturn}>hier!</Link></h3>
            </div>
        </>
    );
};