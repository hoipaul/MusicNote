import React from "react";
import AlbumInfo from "../../components/musicInfo/AlbumInfo";
import purple_rain from "../../assets/albumCovers/purple_rain.jpg";

export default function AlbumDangerous() {
    return (
        <>
            <AlbumInfo
                img={purple_rain}
                imgAlt={"Purple rain"}
                imgTitle={"Prince op zijn motor, zoals hij te zien is in de film 'Purple rain'"}
                infoText={"'Purple rain' is verreweg het bekendste album van Prince, met de titelsong als zijn magnum opus. De meeste artiesten raken op een gegeven moment vaak wel een beetje klaar met het live performen van hun allerbekendste nummer. Prince had hier echter totaal geen problemen mee en nam het steevast op in de setlists van zijn concerten."}
                artist={"Prince"}
                album={"Purple rain"}
                year={"1984"}
                genre={"Rock / Funk"}
                label={"Warner Bros."}
                track1={"Let's go crazy"}
                playtime1={"(4:40)"}
                track2={"Take me with U"}
                playtime2={"(3:54)"}
                track3={"The beautiful ones"}
                playtime3={"(5:14)"}
                track4={"Computer blue"}
                playtime4={"(3:59)"}
                track5={"Darling Nikki"}
                playtime5={"(4:15)"}
                track6={"When doves cry"}
                playtime6={"(5:54)"}
                track7={"I would die 4 U"}
                playtime7={"(2:49)"}
                track8={"Baby I'm a star"}
                playtime8={"(4:25)"}
                track9={"Purple rain"}
                playtime9={"(8:42)"}
                returnToArtist={"Prince"}
                artistPageReturn={"/prince"}
            />
        </>
    );
};