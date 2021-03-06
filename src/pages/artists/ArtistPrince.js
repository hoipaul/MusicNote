import React from "react";
import ArtistInfo from "../../components/musicInfo/ArtistInfo";
import musicology from "../../assets/albumCovers/musicology.jpg";
import ninety from "../../assets/albumCovers/ninety.jpg";
import purple_rain from "../../assets/albumCovers/purple_rain.jpg";
import symbol from "../../assets/artistsMisc/symbol.jpeg";

export default function ArtistPrince() {
    return (
        <>
            <ArtistInfo
                name={"Prince"}
                fullName={"Prince Rogers Nelson"}
                nickNames={"'The Artist', 'The Symbol', 'TAFKAP', 'His Royal Badness'"}
                birthPlace={"Minneapolis (Minnesota)"}
                lifeSpan={"7 Juni 1958 – 21 April 2016"}
                infoText={"Prince was een artiest, groot geworden in de jaren '80, die zich toelegde op veel verschillende muziekgenres. Dit liep uiteen van pop en soul tot R&B en funk. Tot zijn bekendste nummers horen o.a. 'Purple rain', 'When doves cry' en 'Kiss'. Hij was een multi-instrumentalist; dat wil zeggen dat hij bijna alle instrumenten zelf kon bespelen. Dit had hij zichzelf aangeleerd! Prince was namelijk een echte controlfreak en wilde dat alles tot in de puntjes perfect werd uitgevoerd bij concerten en bij het opnemen van muziek. Hiervoor belde hij soms zelfs leden van zijn band 's nachts uit bed! Ook nam hij extreem veel muziek op. Befaamd is zijn muziekkluis die zich bevond in zijn eigen opnamestudio 'Paisley Park' in Minneapolis, waarin hij zijn onuitgebrachte muziek bewaarde. Na zijn dood is hier inmiddels veel muziek alsnog van uitgebracht."}
                URL={"https://www.prince.com"}
                URLname={"www.prince.com"}
                img={symbol}
                title={"'The Love Symbol'"}
                highlightOne={ninety}
                albumOne={"1999 (1982) KLIK VOOR MEER INFO!"}
                highlightTwo={purple_rain}
                albumTwo={"Purple Rain (1984) KLIK VOOR MEER INFO!"}
                highlightThree={musicology}
                albumThree={"Musicology (2004) KLIK VOOR MEER INFO!"}
                pageOne={"./album1999"}
                pageTwo={"./albumPurpleRain"}
                pageThree={"./albumMusicology"}
            />
        </>
    );
};