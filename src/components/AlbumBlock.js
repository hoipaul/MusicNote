import React from 'react';
import '../components/AlbumBlock.css';

export default function AlbumBlock({URL, img}) {
    return (
        <div className="album-block">
            <figure className="album-view">
                <div>
                    <a href={URL}>
                        <img className="album" id="album" src={img} alt="album"/>
                    </a>
                </div>
            </figure>
        </div>
    );
};