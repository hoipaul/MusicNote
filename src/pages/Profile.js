import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {authContext} from '../context/AuthContext';
import '../pages/Search.css';
import '../pages/Profile.css';

function Profile() {
    const [privateContent, setPrivateContent] = useState({});

    const {user} = useContext(authContext);

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
            <h1>Profielpagina</h1>
            <section>
                <h2>Gebruikersgegevens:</h2>
                {user &&
                <>
                    <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </>
                }
            </section>
            {privateContent &&
            <section>
                <h2>Priv&#233; voor ingelogde gebruikers</h2>
                <h4>{privateContent.title}</h4>
                <p>{privateContent.content}</p>
            </section>
            }
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;