import React from 'react';
import {NavLink} from "react-router-dom";
import logo from '../assets/music-note.jpg'
import PageHeader from "./PageHeader";
import '../components/TopMenu.css';

function TopMenu() {
    return (
        <nav>
            <div className="nav-container">
                <PageHeader icon={logo} title="MusicNote App &#8482; "/>
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">
                            Inloggen
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
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;