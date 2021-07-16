import React from 'react';
import '../components/AlbumBlock.css';

export default function AlbumBlock({URL, img, alt, title}) {
    return (
        <div className="album-block">
            <figure className="album-view">
                <div>
                    <a href={URL}>
                        <img className="album" id="album" src={img} alt={alt} title={title}/>
                    </a>
                </div>
            </figure>
        </div>
    );
};