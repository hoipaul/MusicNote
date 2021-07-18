import React from "react";
import AlbumInfo from "../../components/musicInfo/AlbumInfo";
import musicology from "../../assets/albumCovers/musicology.jpg";

export default function AlbumDangerous() {
    return (
        <>
            <AlbumInfo
                img={musicology}
                imgAlt={"Musicology"}
                imgTitle={"De albumhoes van 'Musicology'"}
                infoText={"Het R&B-georiënteerde 'Musicology' is het 28ste studio-album van Prince. Hij won er twee Grammy-awards mee. Het titelnummer 'Musicology', 'Call my name' en 'Cinnamon girl' werden als singles uitgebracht. Ook de Nederlandse saxofoniste Candy Dulfer speelt een deuntje mee op enkele nummers van dit album."}
                artist={"Prince"}
                album={"Musicology"}
                year={"2004"}
                genre={"R&B / Funk / Soul"}
                label={"Columbia Records"}
                track1={"Musicology"}
                playtime1={"(4:26)"}
                track2={"Illusion, coma, pimp & circumstance"}
                playtime2={"(4:46)"}
                track3={"A million days"}
                playtime3={"(3:50)"}
                track4={"Life 'O' the party"}
                playtime4={"(4:29)"}
                track5={"Call my name"}
                playtime5={"(5:15)"}
                track6={"Cinnamon girl"}
                playtime6={"(3:56)"}
                track7={"What do U want me 2 do?"}
                playtime7={"(4:15)"}
                track8={"The marrying kind"}
                playtime8={"(2:49)"}
                track9={"If eye was the man in Ur life"}
                playtime9={"(3:09)"}
                track10={"10. On the couch"}
                playtime10={"(3:33)"}
                track11={"11. Dear Mr. Man"}
                playtime11={"(4:14)"}
                track12={"12. Reflection"}
                playtime12={"(3:04)"}
                returnToArtist={"Prince"}
                artistPageReturn={"/prince"}
            />
        </>
    );
};