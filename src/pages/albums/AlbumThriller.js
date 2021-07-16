import React from "react";
import AlbumInfo from "../../components/musicInfo/AlbumInfo";
import thriller from "../../assets/albumCovers/thriller.jpeg";

export default function AlbumThriller() {
    return (
        <>
            <AlbumInfo
                img={thriller}
                imgAlt={"Thriller"}
                imgTitle={"'Thriller', het best verkochte album aller tijden."}
                infoText={"De legendarische elektrische gitaar-solo in het nummer 'Beat it' werd ingespeeld door Eddie van Halen, de rockster met Nederlandse roots. Van Halen vroeg nooit een vergoeding voor zijn bijdrage aan het nummer. Naar verluidt ging hij akkoord voor slechts '2 six-packs bier', nog niet wetende hoe groot de hit uiteindelijk zou gaan worden..."}
                artist={"Michael Jackson"}
                album={"Thriller"}
                year={"1982"}
                genre={"Pop"}
                label={"Epic Records"}
                track1={"Wanna be startin' somethin'"}
                playtime1={"(6:03)"}
                track2={"Baby be mine"}
                playtime2={"(4:20)"}
                track3={"The girl is mine"}
                playtime3={"(3:41)"}
                track4={"Thriller"}
                playtime4={"(5:57)"}
                track5={"Beat it"}
                playtime5={"(4:15)"}
                track6={"Billie Jean"}
                playtime6={"(4:56)"}
                track7={"Human nature"}
                playtime7={"(4:06)"}
                track8={"P.Y.T."}
                playtime8={"(3:57)"}
                track9={"She's out of my life"}
                playtime9={"(4:53)"}
                returnToArtist={"Michael Jackson"}
                artistPageReturn={"/jackson"}
            />
        </>
    );
};