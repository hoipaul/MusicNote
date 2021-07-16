import React from 'react';
import smooth_criminal from "../../assets/artistsMisc/smooth_criminal.jpeg";
import smooth_criminal_single from "../../assets/singleCovers/smooth_criminal_single.jpg";
import TrackInfo from "../../components/musicInfo/TrackInfo";

export default function TrackSmoothCriminal() {

    return (
        <>
            <TrackInfo
                img={smooth_criminal_single}
                imgAlt={"Smooth criminal"}
                imgTitle={"De maxi-single van 'Smooth Criminal'"}
                trackName={"Smooth Criminal"}
                composers={"Michael Jackson"}
                producers={"Quincy Jones / Michael Jackson"}
                infoText={"'Smooth criminal' is een up-tempo popnummer. Het werd in 1988 de zevende single van het album 'Bad'. Een eerdere versie van de track was getiteld 'Al Capone'. De videoclip, uit de film 'Moonwalker', speelt zich dan ook af in een nachtclub in de jaren '30, waar gangsters de scepter zwaaien. Jackson laat in de clip een speciale dancemove zien waarbij hij met gestrekte benen verder dan zijn zwaartepunt voorover leunt. Hij lijkt hiermee op magische wijze de wetten van de zwaartekracht te tarten."}
                infoImg={smooth_criminal}
                infoImgAlt={"De magische leun"}
                infoImgTitle={"De bekende leun-beweging uit de videoclip van 'Smooth criminal'."}
                returnToAlbum={"'Bad'"}
                artistPageReturn={"/albumBad"}
            />
        </>
    );
};