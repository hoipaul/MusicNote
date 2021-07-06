import React from 'react';
import '../components/AlbumTile.css';

function AlbumTile({img}) {
    return (
        <article>
            <img id="popular" src={img} alt="popular album"/>
        </article>
    );
}

export default AlbumTile;