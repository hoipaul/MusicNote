// profile zit nu in Search

import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import '../pages/Search.css';
import SearchBox from "../components/SearchBox";

function Search() {
    const [privateContent, setPrivateContent] = useState({});

    const {user} = useContext(AuthContext);

    useEffect(() => {
        const token = localStorage.getItem('token');

        async function getPrivateContent() {
            try {
                const result = await axios.get(`https://polar-lake-14365.herokuapp.com/api/test/admin`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });

                console.log(result.data);
                setPrivateContent(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        getPrivateContent();
    }, []);

    return (
        <>
            <h1>Zoeken met MusicNote &#8482;</h1>
            <section id="section1">
                <h2>Gebruikersgegevens:</h2>
                <h1>Zoeken naar muziek</h1>
                <p>Zoek hier naar al jouw favoriete muziek!</p>
                {user &&
                <>
                    <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </>
                }
            </section>
            {privateContent &&
            <section>
                <h2>De zoekfunctie is alleen voor ingelogde gebruikers</h2>
                <h4>{privateContent.title}</h4>
                <p>{privateContent.content}</p>
                <SearchBox/>
            </section>
            }
            <p>Terug naar <Link to="/">Home</Link></p>
        </>
    );
}

export default Search;