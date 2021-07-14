import React from 'react';
import '../components/PageHeader.css';
import {useHistory} from 'react-router-dom';

export default function PageHeader({icon, title}) {
    const history = useHistory();

    function handleClick() {
        history.push('/');
    }

    return (
        <div className="title-container">
            <img id="header" src={icon} alt={title} onClick={handleClick}/>
            <h1>{title}</h1>
        </div>
    );
};