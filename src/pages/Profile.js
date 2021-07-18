import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../context/AuthContext';
import earphones from "../assets/earphones.jpeg";
import RegionSelect from "../components/RegionSelect";
import Footer from "../components/Footer";
import '../pages/Profile.css';

export default function Profile() {
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
            <h1>Jouw MusicNote &#8482; profielpagina</h1>
            <div className="profile-container">
                <div className="private-content">
                    <section>
                        <RegionSelect/>
                        <h2>Mijn gebruikersgegevens:</h2>
                        {user &&
                        <>
                            <p><strong>Mijn gebruikersnaam:</strong> {user.username}</p>
                            <p><strong>Mijn e-mailadres:</strong> {user.email}</p>
                            Dit is jouw speciale priv&#233;pagina!
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
                <div className="profile-image"><img id="earphones" src={earphones} alt="earphones" title="Dit is jouw profielpagina!"/></div>
            </div>
            <h3>Terug naar de <Link to="/">Homepagina</Link></h3>
            <Footer/>
        </>
    );
};