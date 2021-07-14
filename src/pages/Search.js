import React from 'react';
import {Link} from 'react-router-dom';
import SearchForm from "../components/SearchForm";
import AlbumBlock from "../components/AlbumBlock";
import Footer from "../components/Footer";
import '../pages/Search.css';
import mayer from "../assets/albumCovers/mayer.jpg";
import queen from "../assets/albumCovers/queen.jpg";
import perry from "../assets/albumCovers/perry.jpeg";
import bjork from "../assets/albumCovers/bjork.jpeg";
import jay from "../assets/albumCovers/jay.jpeg";
import wonder from "../assets/albumCovers/wonder.jpg";
import no_doubt from "../assets/albumCovers/no_doubt.jpeg";
import abbey from "../assets/albumCovers/abbey.jpeg";
import tina from "../assets/albumCovers/tina.jpeg";

export default function Search() {

    return (
        <>
            <h1>Zoeken met MusicNote &#8482;</h1>
            <div className="search-container">
                <div className="search-block">
                    <h2>Zoek hier naar al jouw favoriete muziek!</h2>
                    <SearchForm/>
                    <h3>Terug naar <Link to="/">Home</Link></h3>
                </div>
                <div className="album-block">
                    <div>
                        <AlbumBlock
                            URL={"https://www.johnmayer.com"}
                            img={mayer}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.queenonline.com"}
                            img={queen}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.katyperry.com"}
                            img={perry}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.bjork.com"}
                            img={bjork}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.jamiroquai.com"}
                            img={jay}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.steviewonder.org.uk"}
                            img={wonder}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.nodoubt.com"}
                            img={no_doubt}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.thebeatles.com"}
                            img={abbey}
                        />
                    </div>
                    <div>
                        <AlbumBlock
                            URL={"https://www.tinaturnerofficial.com"}
                            img={tina}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};