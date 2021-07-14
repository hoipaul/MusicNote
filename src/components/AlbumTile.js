import React from 'react';
import '../components/AlbumTile.css';

export default function AlbumTile({URL, img}) {
    return (
        <figcaption>
            <a href={URL}>
                <img id="popular" src={img} alt="popular album"/>
            </a>
        </figcaption>
    );
};