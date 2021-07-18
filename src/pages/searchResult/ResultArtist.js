import React from "react";
import {useHistory} from 'react-router-dom';
import Byrds from "../../assets/artists/byrds.jpeg";
import Crosby from "../../assets/artists/crosby.jpeg";
import Denver from "../../assets/artists/denver.jpg";
import Simon from "../../assets/artists/simon_garfunkel.jpeg";
import './ResultArtist.css';

export default function ResultAlbum() {
    const history = useHistory();

    function NewSearch() {
        history.push('/search');
    }

    return (
        <>
            <h1>Zoekresultaat:</h1>
            <div className="search-result-container">
                <div className="artist-cover">
                    <a href="https://www.simonandgarfunkel.com">
                        <img id="artist-result" src={Simon} alt="Simon & Garfunkel"
                             title={"Paul Simon & Art Garfunkel"}/>
                    </a>
                    <div className="click-box">
                        <h2>☞</h2>
                        <h3 id="click-image-search-result">Klik op een afbeelding om naar de website van de artiest te
                            gaan</h3>
                    </div>
                </div>
                <div className="artist-specs">
                    <h1>Simon &#38; Garfunkel</h1>
                    Leden:
                    <h3>• Paul Simon</h3>
                    <h3>• Art Garfunkel</h3>
                    <h3>New York City, USA</h3>
                    Samen:<h3>1957-1970</h3>
                </div>
                <div className="album-list">
                    <h2>Albums:</h2>
                    <h3>• Wednesday morning, 3 A.M. (1964)</h3>
                    <h3>• Sounds of silence (1966)</h3>
                    <h3>• Parsley, sage, rosemary &#38; thyme (1966)</h3>
                    <h3>• The graduate (1968)</h3>
                    <h3>• Bookends (1968)</h3>
                    <h3>• Bridge over troubled water (1970)</h3>
                </div>
            </div>
            <h2>Gerelateerde artiesten:</h2>
            <div className="related-artists">
                <div className="related-box">
                    <h2>The Byrds</h2>
                    <img id="related-result" src={Byrds} alt="The Byrds" title="The Byrds"/>
                </div>
                <div className="related-box">
                    <h2>John Denver</h2>
                    <a href="https://www.johndenver.com">
                        <img id="related-result" src={Denver} alt="John Denver" title="John Denver"/>
                    </a>
                </div>
                <div className="related-box">
                    <h2>David Crosby</h2>
                    <a href="https://www.davidcrosby.com">
                        <img id="related-result" src={Crosby} alt="David Crosby" title="David Crosby"/>
                    </a>
                </div>
            </div>
            <button id="return-button"
                    type="submit"
                    onClick={NewSearch}
            >Nieuwe zoekopdracht
            </button>
        </>
    )
        ;
};