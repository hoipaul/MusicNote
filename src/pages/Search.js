import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../pages/Search.css';
import SearchBox from "../components/SearchBox";

function Search() {

    return (
        <>
            <h1>Zoeken met MusicNote &#8482;</h1>
            <section id="section1">
                <p>Zoek hier naar al jouw favoriete muziek!</p>
                <SearchBox/>
            </section>

            <p>Terug naar <Link to="/">Home</Link></p>
        </>
    );
}

export default Search;