import React from "react";
import AlbumInfo from "../../components/musicInfo/AlbumInfo";
import ninety from "../../assets/albumCovers/ninety.jpg";

export default function AlbumDangerous() {
    return (
        <>
            <AlbumInfo
                img={ninety}
                imgAlt={"1999"}
                imgTitle={"De albumhoes van '1999'."}
                infoText={"Met zijn bekende 'synthesizer en drum'-geluid, kan deze plaat volgens de Rolling Stone Album Guide misschien wel het invloedrijkste album van Prince worden genoemd. Deze sound werd door veel producers in de jaren '80 en daarna overgenomen. In 2019 werd er van het album een 'Super-Deluxe Edition' uitgebracht met daarop veel bonusmateriaal."}
                artist={"Prince"}
                album={"1999"}
                year={"1982"}
                genre={"Pop / Funk"}
                label={"Warner Bros."}
                track1={"1999"}
                playtime1={"(6:13)"}
                track2={"Little red Corvette"}
                playtime2={"(5:03)"}
                track3={"Delirious"}
                playtime3={"(4:00)"}
                track4={"Let's pretend we're married"}
                playtime4={"(7:19)"}
                track5={"D.M.S.R."}
                playtime5={"(8:17)"}
                track6={"Automatic"}
                playtime6={"(9:26)"}
                track7={"Something in the water"}
                playtime7={"(4:02)"}
                track8={"Free"}
                playtime8={"(5:07)"}
                track9={"Lady cab driver"}
                playtime9={"(8:17)"}
                track10={"10. All the critics love you in New York"}
                playtime10={"(5:57)"}
                track11={"11. International lover"}
                playtime11={"(6:37)"}
                returnToArtist={"Prince"}
                artistPageReturn={"/prince"}
            />
        </>
    );
};