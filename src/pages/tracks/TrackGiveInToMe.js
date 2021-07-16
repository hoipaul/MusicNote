import React from 'react';
import give_in_single from "../../assets/singleCovers/give_in_single.jpeg";
import slash_live from "../../assets/artistsMisc/slash_live.jpeg";
import TrackInfo from "../../components/musicInfo/TrackInfo";

export default function TrackGiveInToMe() {

    return (
        <>
            <TrackInfo
                img={give_in_single}
                imgAlt={"Give in to me"}
                imgTitle={"De single van 'Give in to me'"}
                trackName={"Give in to me"}
                composers={"Michael Jackson & Bill Bottrell"}
                producers={"Michael Jackson & Bill Bottrell"}
                infoText={"Voor dit hardrock-nummer werkte Jackson samen met Guns 'n Roses gitarist Slash. Zijn striemende gitaar-riffs in combinatie met de rauwe stem van Jackson kleuren het nummer in. Hun samenwerking smaakte naar meer en later zou Slash dan ook nog op meer nummers van Jackson meespelen, op de albums 'HIStory' (1995), 'Blood on the dance floor' (1997) en 'Invincible' (2001). Guns 'n Roses zanger Axl Rose was naar verluidt niet blij dat zijn gitarist stappen buiten de band zette, hetgeen uiteindelijk tot veel spanningen en indirect tot het uiteenvallen van Guns 'n Roses zou hebben geleid."}
                infoImg={slash_live}
                infoImgAlt={"Give in to me"}
                infoImgTitle={"Michael Jackson samen op het podium met Slash"}
                returnToAlbum={"'Dangerous'"}
                artistPageReturn={"/albumDangerous"}
            />
        </>
    );
};