import React from 'react';
import '../components/AlbumTile.css';

export default function AlbumTile({URL, img, title}) {
    return (
        <figcaption>
            <a href={URL}>
                <img id="popular" src={img} alt="popular album" title={title}/>
            </a>
        </figcaption>
    );
};