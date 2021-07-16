import React from "react";
import AlbumInfo from "../../components/musicInfo/AlbumInfo";
import bad from "../../assets/albumCovers/bad.jpg";

export default function AlbumBad() {
    return (
        <>
            <AlbumInfo
                img={bad}
                imgAlt={"Bad"}
                imgTitle={"'Michael Jackson verschijnt in 1987 op de hoes van 'Bad' met een totaal ander uiterlijk dan op de hoes van 'Thriller', 5 jaar eerder."}
                infoText={"'Bad' was de langverwachte opvolger van 'Thriller'. Het verkoopsucces van zijn voorgaande album kon Jackson niet overtreffen, maar desondanks was dit album een enorm commercieel succes. Er werden maar liefst 9 nummers als single uitgebracht; een extreem hoog aantal voor één album. Het album werd gepromoot met de film 'Moonwalker'."}
                artist={"Michael Jackson"}
                album={"Bad"}
                year={"1987"}
                genre={"Pop"}
                label={"Epic Records"}
                track1={"Bad"}
                playtime1={"(4:07)"}
                track2={"The way you make me feel"}
                playtime2={"(4:59)"}
                track3={"Speed demon"}
                playtime3={"(4:04)"}
                track4={"Liberian girl"}
                playtime4={"(3:49)"}
                track5={"Just good friends"}
                playtime5={"(4:07)"}
                track6={"Another part of me"}
                playtime6={"(3:55)"}
                track7={"Man in the mirror"}
                playtime7={"(5:18)"}
                track8={"I just can't stop loving you"}
                playtime8={"(4:11)"}
                track9={"Dirty Diana"}
                playtime9={"(4:11)"}
                track10={"10. Smooth criminal"}
                playtime10={"(4:18)"}
                track11={"11. Leave me alone"}
                playtime11={"(4:40)"}
                returnToArtist={"Michael Jackson"}
                artistPageReturn={"/jackson"}
                trackLink={"./trackSmoothCriminal"}
            />
        </>
    );
};