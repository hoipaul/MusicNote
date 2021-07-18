import React from 'react';
import {useHistory} from "react-router-dom";
import Sunshine from "../../assets/singleCovers/sunshine.jpeg";
import './ResultTrack.css';

export default function ResultTrack() {
    const history = useHistory();

    function NewSearch() {
        history.push('/search');
    }

    return (
        <>
            <h1>Zoekresultaat:</h1>
            <div className="track-result-container">
                <div className="single-container">
                    <img id="single-info" src={Sunshine} alt="sunshine" title="Cover me in sunshine"/>
                </div>
                <div className="single-specs">
                    <h2>P!nk &#38; Willow Sage Heart</h2>
                    <h2>"Cover me in sunshine"</h2>
                    <h3>Geschreven door Maureen "Mozella" McDonald &#38; Amy Allen</h3>
                    <h3>Producers: The Struts</h3>
                    <h3>RCA Records</h3>
                    <h3>2021</h3>
                    <div className="info-text">
                    </div>
                    <div>
                        {/*<img id="info-image" src= alt= title=/>*/}
                    </div>
                </div>
            </div>
            {/*<div className="click-box">*/}
            {/*    <h1>☞</h1><h3 id="return-info"> Terug naar het album? Klik dan <Link*/}
            {/*    to=>hier!</Link></h3>*/}
            {/*</div>*/}

            <button id="return-button"
                    type="submit"
                    onClick={NewSearch}
            >Nieuwe zoekopdracht
            </button>
        </>
    );
};