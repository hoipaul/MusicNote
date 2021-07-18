import React from "react";
import {Link} from 'react-router-dom';
import LoginFooter from "../LoginFooter";
import './ArtistInfo.css';

export default function ArtistInfo({
                                       name,
                                       fullName,
                                       birthPlace,
                                       lifeSpan,
                                       nickNames,
                                       infoText,
                                       URL,
                                       URLname,
                                       img,
                                       title,
                                       highlightOne,
                                       highlightTwo,
                                       highlightThree,
                                       albumOne,
                                       albumTwo,
                                       albumThree,
                                       pageOne,
                                       pageTwo,
                                       pageThree
                                   }) {
    return (
        <>
            <div className="artist-container">
                <div className="artist-info">
                    <h1>{name}</h1>
                    <h2>Volledige naam: {fullName}</h2>
                    <h3>Ook bekend als: {nickNames}</h3>
                    <h3>Geboorteplaats: {birthPlace}</h3>
                    <h3>{lifeSpan}</h3>
                    <p>{infoText}</p>
                    <h3>Uitgelichte albums:</h3>
                    <Link to={pageOne}>
                        <img id="highlight-one" src={highlightOne} alt="highlight-one" title={albumOne}/></Link>
                    <Link to={pageTwo}>
                        <img id="highlight-two" src={highlightTwo} alt="highlight-two" title={albumTwo}/></Link>
                    <Link to={pageThree}>
                        <img id="highlight-three" src={highlightThree} alt="highlight-three" title={albumThree}/></Link>
                    <div className="click-box">
                        <h1 id="hand-symbol">☞</h1>
                        <h3 id="click-image-home">Klik op een album voor meer informatie!</h3>
                    </div>
                </div>
                <div className="artist-image">
                    <img id="image" src={img} alt="info" title={title}/>
                    <div className="official-site">
                        <h2>Offici&#235;le website: <a href={URL}>{URLname}</a></h2>
                    </div>
                </div>
            </div>
            <LoginFooter/>
        </>
    )
};