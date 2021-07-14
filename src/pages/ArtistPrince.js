import React from "react";
import ArtistInfo from "../components/ArtistInfo";
import Symbol from "../assets/symbol.jpeg";

export default function ArtistPrince() {
    return (
        <>
            <ArtistInfo
                name={"Prince"}
                fullName={"Prince Rogers Nelson"}
                nickNames={"'The Artist', 'The Symbol', 'TAFKAP', 'His Royal Badness'"}
                birthPlace={"Minneapolis (Minnesota)"}
                lifeSpan={"7 Juni 1958 – 21 April 2016"}
                infoText={"Prince was een artiest, groot geworden in de jaren '80, die zich toelegde op veel verschillende muziekgenres. Dit liep uiteen van pop en soul tot R&B en funk. Tot zijn bekendste nummers horen o.a. 'Purple rain', 'When doves cry' en 'Kiss'. Hij was een multi-instrumentalist; dat wil zeggen dat hij bijna alle instrumenten zelf kon bespelen. Dit had hij zichzelf aangeleerd! Prince was namelijk een echte controlfreak en wilde dat alles tot in de puntjes perfect werd uitgevoerd bij concerten en bij het opnemen van muziek. Hiervoor belde hij soms zelfs leden van zijn band 's nachts uit bed! Ook nam hij extreem veel muziek op. Befaamd is zijn muziekkluis die zich bevond in zijn eigen opnamestudio 'Paisley Park' in Minneapolis. Na zijn dood is hier inmiddels veel muziek alsnog van uitgebracht."}
                URL={"https://www.prince.com"}
                URLname={"www.prince.com"}
                img={Symbol}
            />
        </>
    );
};