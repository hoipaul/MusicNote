import React from 'react';
import {useHistory} from 'react-router-dom';
import daft_punk from "../assets/albumCovers/daft_punk.jpeg";
import Footer from "../components/Footer";
import '../pages/SearchResult.css';

export default function SearchResult() {
    const history = useHistory();

    function NewSearch() {
        history.push('/search');
    }

    return (
        <>
            <h1>Zoekresultaat</h1>
            <div className="search-result-container">
                <div className="album-cover">
                    <a href="https://www.daftpunk.com">
                        <img id="album-result" src={daft_punk} alt="daft punk"/>
                    </a>
                </div>
                <div className="album-specs">
                    <h2>Artiest: Daft Punk</h2>
                    <h2>Album: Random access memories</h2>
                    <h3>Jaar: 2013</h3>
                    <h3>Genre: Pop</h3>
                    <h3>Label: Columbia Records</h3>
                </div>
                <div className="tracklist">
                    <h3>Tracklist:</h3>
                    <p>1. Give life back to music (4:34)</p><p>2. The game of love (5:21)</p><p>3. Giorgio by Moroder
                    (9:04)</p><p>4. Within (3:48)</p><p>5. Instant crush (5:37)</p><p>6. Lose yourself (5:53)</p><p>7.
                    Touch (8:18)</p><p>8. Get lucky (6:07)</p><p>9. Beyond (4:50)</p>
                    <p>10. Motherboard (5:41)</p>
                </div>
            </div>
            <button id="return-button"
                    type="submit"
                    onClick={NewSearch}
            >Nieuwe zoekopdracht
            </button>
            <Footer/>
        </>
    );
};