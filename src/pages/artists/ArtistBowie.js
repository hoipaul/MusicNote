import React from "react";
import ArtistInfo from "../../components/musicInfo/ArtistInfo";
import sane from "../../assets/artistsMisc/sane.jpeg"
import heroes from "../../assets/albumCovers/heroes.jpg";
import low from "../../assets/albumCovers/low.jpg";
import young_americans from "../../assets/albumCovers/young_americans.jpg";

export default function ArtistBowie() {
    return (
        <>
            <ArtistInfo
                name={"David Bowie"}
                fullName={"David Robert Jones"}
                nickNames={"'Ziggy Stardust', 'The Thin White Duke', 'Major Tom', 'Aladdin Sane'"}
                birthPlace={"Londen, UK"}
                lifeSpan={"8 januari 1947 – 10 januari 2016"}
                infoText={"David Bowie was een veelzijdig artiest die met verschillende muziekstijlen experimenteerde. Gedurende zijn carrière nam hij meerdere personages aan bij de vertolking van zijn muziek. Zo creëerde hij bijvoorbeeld zijn androgyne alter-ego genaamd 'Ziggy Stardust'. Eind jaren '70 nam hij in West-Berlijn het nummer 'Heroes' op. Vlak voor de val van de Berlijnse muur in 1987 zong hij dit lied in de Duitse Reichstag. Hij werkte later nog samen met o.a. Queen, John Lennon, Tina Turner en Nile Rodgers. Met het door laatstgenoemde mede-geproduceerde 'Let's dance' bereikte Bowie het hoogtepunt van zijn commerciële succes en populariteit. Vlak voor zijn dood nam hij nog het album 'Blackstar' op, waarmee hij anticipeerde op zijn naderende einde."}
                URL={"https://www.davidbowie.com"}
                URLname={"www.davidbowie.com"}
                img={sane}
                title="David Bowie, Aladdin Sane"
                highlightOne={young_americans}
                albumOne={"Young Americans (1975)"}
                highlightTwo={low}
                albumTwo={"Low (1977)"}
                highlightThree={heroes}
                albumThree={"Heroes (1977)"}
            />
        </>
    );
};