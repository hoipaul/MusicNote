import React from 'react';
import {NavLink, useHistory} from "react-router-dom";
import logo from '../assets/music-note.jpg';
import PageHeader from "./PageHeader";
import '../components/TopMenu.css';

export default function TopMenu({isAuth, toggleAuth}) {
    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push('/')
    }

    return (
        <nav>
            <div className="nav-container">
                <PageHeader icon={logo} title="MusicNote App &#8482;" headerTitle="MusicNote &#8482; 2021"/>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" activeClassName="active-link">
                            Aanmelden
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" activeClassName="active-link">
                            Zoeken
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active-link">
                            Over ons
                        </NavLink>
                    </li>
                    {isAuth === true
                        ? <>
                            <li>
                                <button type="button" onClick={signOut}>
                                    Uitloggen
                                </button>
                            </li>
                        </>
                        :
                        <li>
                            <NavLink to="/login" activeClassName="active-link">
                                Inloggen
                            </NavLink>
                        </li>}
                </ul>
            </div>
        </nav>
    );
}
;