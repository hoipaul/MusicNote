import {useForm} from "react-hook-form";
import React from 'react';
import wonder from "../assets/albumCovers/wonder.jpg"
import mayer from "../assets/albumCovers/mayer.jpg"
import queen from "../assets/albumCovers/queen.jpg"
import perry from "../assets/albumCovers/perry.jpeg"
import jay from "../assets/albumCovers/jay.jpeg"
import bjork from "../assets/albumCovers/bjork.jpeg"
import no_doubt from "../assets/albumCovers/no_doubt.jpeg"
import abbey from "../assets/albumCovers/abbey.jpeg"
import tina from "../assets/albumCovers/tina.jpeg"
import '../pages/Search.css';
import SearchArtist from "./SearchArtist";
import SearchAlbum from "./SearchAlbum";
import SearchTrack from "./SearchTrack";
// import {authContext} from "../contexts/AuthContext";

function Search() {
    const {handleSubmit, register} = useForm();
    const onSubmit = (data) => JSON.stringify(data);

    return (
        <>
            <fieldset className="fieldset">
                <form id="search-box" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="search-artist">
                        Zoek op artiest
                        <input
                            type="search-artist"
                            id="search-artist-field"
                            name="search-artist"
                            {...register("search-artist")}
                        />
                    </label>
                    <SearchArtist/>
                    <label htmlFor="search-album">
                        Zoek op album
                        <input
                            type="search-album"
                            id="search-album-field"
                            name="search-album"
                            {...register("search-album")}
                        />
                    </label>
                    <SearchAlbum/>
                    <label htmlFor="search-track">
                        Zoek op track
                        <input
                            type="search-track"
                            id="search-track-field"
                            name="search-track"
                            {...register("search-track")}
                        />
                    </label>
                    <SearchTrack/>
                </form>
            </fieldset>
            <fieldset className="fieldsetAlbum">
                <figure id="album-container">
                    <img class="album" id="mayer" src={mayer} alt="mayer"/>
                    <img class="album" id="queen" src={queen} alt="queen"/>
                    <img class="album" id="perry" src={perry} alt="perry"/>
                    <img class="album" id="bjork" src={bjork} alt="bjork"/>
                    <img class="album" id="jay" src={jay} alt="jay"/>
                    <img class="album" id="wonder" src={wonder} alt="wonder"/>
                    <img class="album" id="no-doubt" src={no_doubt} alt="no-doubt"/>
                    <img class="album" id="abbey" src={abbey} alt="abbey"/>
                    <img class="album" id="tina" src={tina} alt="tina"/>
                </figure>
            </fieldset>
        </>
    )

}

export default Search;