import {Link} from "react-router-dom";
import React from "react";
import './LoginFooter.css';

export default function LoginFooter(){

return (
<h3 className="login-footer"><Link
    to="/login">Log nu in </Link>bij MusicNote &#8482; en zoek meer informatie op over jouw
    favoriete
    artiest via het <Link
        to="/search">ZOEKMENU</Link> !</h3>
);
};