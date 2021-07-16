import React from "react";
import AlbumInfo from "../../components/musicInfo/AlbumInfo";
import dangerous from "../../assets/albumCovers/dangerous.jpg";

export default function AlbumDangerous() {
    return (
        <>
            <AlbumInfo
                img={dangerous}
                imgAlt={"Bad"}
                imgTitle={"De albumhoes van 'Dangerous', naar een ontwerp van de Amerikaanse schilder Mark Ryden."}
                infoText={"De release van dit album werd in november 1991 gelanceerd met het uitzenden van de videoclip van 'Black or white' in maar liefst 27 landen tegelijk. Dit trok wereldwijd ca. 500 miljoen kijkers: het grootste aantal kijkers voor een muziekvideo ooit. 5 dagen voor de releasedatum werden er 30.000 exemplaren van het album ontvreemd uit een magazijn in Los Angeles."}
                artist={"Michael Jackson"}
                album={"Dangerous"}
                year={"1991"}
                genre={"Pop"}
                label={"Epic Records"}
                track1={"Jam"}
                playtime1={"(5:39)"}
                track2={"Why you wanna trip on me"}
                playtime2={"(5:42)"}
                track3={"In the closet"}
                playtime3={"(6:32)"}
                track4={"She drives me wild"}
                playtime4={"(3:42)"}
                track5={"Remember the time"}
                playtime5={"(4:00)"}
                track6={"Can't let het get away"}
                playtime6={"(5:01)"}
                track7={"Heal the world"}
                playtime7={"(6:25)"}
                track8={"Black or white"}
                playtime8={"(4:16)"}
                track9={"Who is it"}
                playtime9={"(6:35)"}
                track10={"10. Give in to me"}
                playtime10={"(5:29)"}
                track11={"11. Will you be there"}
                playtime11={"(7:41)"}
                track12={"12. Keep the faith"}
                playtime12={"(5:57)"}
                track13={"13. Gone too soon"}
                playtime13={"(3:22)"}
                track14={"14. Dangerous"}
                playtime14={"(6:57)"}
                returnToArtist={"Michael Jackson"}
                artistPageReturn={"/jackson"}
                trackLink={"./trackGiveInToMe"}
            />
        </>
    );
};