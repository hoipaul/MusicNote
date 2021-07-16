import React from "react";
import ArtistInfo from "../../components/musicInfo/ArtistInfo";
import Jukebox from "../../assets/artistsMisc/jukebox.jpg";
import elvis_album from "../../assets/albumCovers/elvis_album.jpg";
import elvis_live from "../../assets/albumCovers/elvis_live.jpg";
import hawaii from "../../assets/albumCovers/hawaii.jpg";

export default function Artist() {
    return (
        <>
            <ArtistInfo
                name={"Elvis Presley"}
                fullName={"Elvis Aaron Presley"}
                nickNames={"'The King', 'The King of Rock and Roll', 'Elvis the Pelvis'"}
                birthPlace={"Tupelo (Mississippi)"}
                lifeSpan={"8 Januari 1935 – 16 Augustus 1977"}
                infoText={"Elvis Presley was de onbetwiste koning van de Rock and Roll. Zijn eerste single was 'That's all right' uit 1954. Later zouden er nog vele hits volgens zoals 'Heartbreak hotel', 'Hound dog' en 'Suspicious minds'. Elvis werd een belichaming van de Amerikaanse jeugdcultuur in de jaren na de Tweede Wereldoorlog en dit maakte hem tot het eerste popidool. Hij speelde ook in meerdere Hollywood-films. In 1958 moest hij in militaire dienst en werd hij gestationeerd in West-Duitsland, alwaar hij zijn latere vrouw Priscilla zou ontmoeten. Zijn landhuis in de buurt van Memphis, Tennessee, genaamd 'Graceland' is een aantal jaren na zijn dood geopend als museum. Er komen jaarlijks honderdduizenden bezoekers naar toe om hier zijn laatste rustplaats bezoeken."}
                URL={"https://www.elvisthemusic.com"}
                URLname={"www.elvisthemusic.com"}
                img={Jukebox}
                title={"Een Elvis Presley jukebox"}
                highlightOne={elvis_album}
                albumOne={"Elvis (1956)"}
                highlightTwo={hawaii}
                albumTwo={"Blue Hawaii (1961)"}
                highlightThree={elvis_live}
                albumThree={"The NBC TV Comeback Special '68"}
            />
        </>
    );
};