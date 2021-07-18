import React from "react";
import ArtistInfo from "../../components/musicInfo/ArtistInfo";
import bad from "../../assets/albumCovers/bad.jpg";
import dangerous from "../../assets/albumCovers/dangerous.jpg";
import feet from "../../assets/artistsMisc/feet.jpeg";
import thriller from "../../assets/albumCovers/thriller.jpeg";

export default function ArtistJackson() {
    return (
        <>
            <ArtistInfo
                name={"Michael Jackson"}
                fullName={"Michael Joseph Jackson"}
                nickNames={"'The King of Pop'"}
                birthPlace={"Gary (Indiana)"}
                lifeSpan={"29 augustus 1958 – 25 juni 2009"}
                infoText={"Michael Jackson's muziekcarrière begon al op extreem jonge leeftijd: hij was pas 6 jaar oud toen hij al samen met zijn broers optrad met de groep 'The Jackson 5'. Toen hij later verder ging als solo-artiest, werd zijn album 'Thriller' uit 1982 het bestverkochte album aller tijden met zo'n 70 miljoen verkochte exemplaren wereldwijd. De nummers 'Thriller', 'Billie Jean' en 'Beat it' werden grote hits. De muziekvideo's die hij maakte hadden soms eerder de lengte van een korte film dan van een videoclip. Van zijn onnavolgbare dansbewegingen op het podium was zijn fameuze 'moonwalk' ongetwijfeld waarschijnlijk de bekendste; hiermee leek hij achteruit over het podium te lopen. Jackson's populariteit bereikte eind jaren '80 en begin jaren '90 een hoogtepunt en hiermee werd hij nagenoeg de bekendste popartiest van de 20ste eeuw."}
                URL={"https://www.michaeljackson.com"}
                URLname={"www.michaeljackson.com"}
                img={feet}
                title={"Michael Jackson op het podium met zijn beroemde witte sokken."}
                highlightOne={thriller}
                albumOne={"Thriller (1982) KLIK VOOR MEER INFO!"}
                highlightTwo={bad}
                albumTwo={"Bad (1987) KLIK VOOR MEER INFO!"}
                highlightThree={dangerous}
                albumThree={"Dangerous (1991) KLIK VOOR MEER INFO!"}
                pageOne={"./albumThriller"}
                pageTwo={"./albumBad"}
                pageThree={"./albumDangerous"}
            />
        </>
    );
};