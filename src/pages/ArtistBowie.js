import React from "react";
import ArtistInfo from "../components/ArtistInfo";
import Sane from "../assets/sane.jpeg";

export default function ArtistBowie() {
    return (
        <>
            <ArtistInfo
                name={"David Bowie"}
                fullName={"David Robert Jones"}
                nickNames={"'Ziggy Stardust', 'The Thin White Duke', 'Major Tom', 'Aladdin Sane'"}
                birthPlace={"Londen, UK"}
                lifeSpan={"8 januari 1947 – 10 januari 2016"}
                infoText={"David Bowie was een veelzijdig artiest die met verschillende muziekstijlen experimenteerde. Gedurende zijn carrière nam hij meerdere personages aan bij de vertolking van zijn muziek. Zo creerde hij bijvoorbeeld zijn androgyne alter-ego genaamd 'Ziggy Stardust'. Eind jaren '70 nam hij in West-Berlijn het nummer 'Heroes' op. Vlak voor de val van de Berlijnse muur in 1987 zong hij dit lied in de Duitse Reichstag. Hij werkte later nog samen met o.a. Queen, Tina Turner en Nile Rodgers. Met het door laatstgenoemde mede-geproduceerde 'Let's dance' bereikte Bowie het hoogtepunt van zijn commerciële succes en populariteit. Vlak voor zijn dood nam hij nog het album 'Blackstar' op, waarmee hij anticipeerde op zijn naderende einde."}
                URL={"https://www.davidbowie.com"}
                URLname={"www.davidbowie.com"}
                img={Sane}
            />
        </>
    );
};