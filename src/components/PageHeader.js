import React from 'react';
import {useHistory} from 'react-router-dom';
import '../components/PageHeader.css';

export default function PageHeader({icon, title, headerTitle}) {
    const history = useHistory();

    function handleClick() {
        history.push('/');
    }

    return (
        <div className="title-container">
            <img id="header" src={icon} alt={title} title={headerTitle} onClick={handleClick}/>
            <h1>{title}</h1>
        </div>
    );
};