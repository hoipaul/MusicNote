import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from "../components/forms/SearchForm";
import AlbumBlock from "../components/AlbumBlock";
import Footer from "../components/Footer";
import mayer from "../assets/albumCovers/mayer.jpg";
import queen from "../assets/albumCovers/queen.jpg";
import perry from "../assets/albumCovers/perry.jpeg";
import bjork from "../assets/albumCovers/bjork.jpeg";
import jay from "../assets/albumCovers/jay.jpeg";
import wonder from "../assets/albumCovers/wonder.jpg";
import no_doubt from "../assets/albumCovers/no_doubt.jpeg";
import abbey from "../assets/albumCovers/abbey.jpeg";
import tina from "../assets/albumCovers/tina.jpeg";
import '../pages/Search.css';

export default function Search() {

    return (
        <>
            <h1>Zoeken met MusicNote &#8482;</h1>
            <div className="search-container">
                <div className="search-block">
                    <h2>Zoek hier naar al jouw favoriete muziek!</h2>
                    <SearchForm/>
                    <div className="click-box">
                        <h1>☞</h1>
                        <h3 id="click-artist-search">Klik op een album om naar de website van de artiest te gaan</h3>
                    </div>
                    <h3 id="home-link">Terug naar <Link to="/">Home</Link></h3>
                </div>
                <div className="album-block">
                    <div>
                        <AlbumBlock
                            URL={"https://www.johnmayer.com"}
                            img={mayer}
                            title={"John Mayer - 'Battle studies' (2009)"}
                            alt={"John Mayer - 'Battle studies' (2009)"}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.queenonline.com"}
                            img={queen}
                            title={"Queen - 'Live at Wembley Stadium '86' (1992)"}
                            alt={"Queen - 'Live at Wembley Stadium '86' (1992)"}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.katyperry.com"}
                            img={perry}
                            title={"Katy Perry - 'Prism' (2013)"}
                            alt={"Katy Perry - 'Prism' (2013)"}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.bjork.com"}
                            img={bjork}
                            title={"Bjork - 'Post' (1995)"}
                            alt={"Bjork - 'Post' (1995)"}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.jamiroquai.com"}
                            img={jay}
                            title={"Jamiroquai - 'A funk odyssey' (2001)"}
                            alt={"Jamiroquai - 'A funk odyssey' (2001)"}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.steviewonder.org.uk"}
                            img={wonder}
                            title={"Stevie Wonder - 'Hotter than July' (1980)"}
                            alt={"Stevie Wonder - 'Hotter than July' (1980)"}

                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.nodoubt.com"}
                            img={no_doubt}
                            title={"No doubt - Tragic kingdom' (1995)"}
                            alt={"Stevie Wonder - 'Hotter than July' (1980)"}

                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.thebeatles.com"}
                            img={abbey}
                            title={"The Beatles - Abbey Road' (1969)"}
                            alt={"The Beatles - Abbey Road' (1969)"}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.tinaturnerofficial.com"}
                            img={tina}
                            title={"Tina Turner - 'What's love got to do with it' (1993)"}
                            alt={"Tina Turner - 'What's love got to do with it' (1993)"}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};