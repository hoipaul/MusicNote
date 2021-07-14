import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {authContext} from '../context/AuthContext';
import earphones from "../assets/earphones.jpeg";
import RegionSelect from "../components/RegionSelect";
import Footer from "../components/Footer";
import '../pages/Search.css';
import '../pages/Profile.css';

export default function Profile() {
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
            <h1>Jouw MusicNote &#8482; profielpagina</h1>
            <div className="profile-container">
                <div className="private-content">
                    <section>
                        <RegionSelect/>
                        <h2>Mijn gebruikersgegevens:</h2>
                        {user &&
                        <>
                            <p><strong>Gebruikersnaam:</strong> {user.username}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                        </>
                        }
                    </section>
                    {privateContent &&
                    <section>
                        <h2>Priv&#233; alleen voor ingelogde gebruikers</h2>
                        <h4>{privateContent.title}</h4>
                        <p>{privateContent.content}</p>
                    </section>
                    }
                </div>
                <div className="profile-image"><img id="earphones" src={earphones} alt="earphones"/></div>
            </div>
            <h3>Terug naar de <Link to="/">Homepagina</Link></h3>
            <Footer/>
        </>
    );
};