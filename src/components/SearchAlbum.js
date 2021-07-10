import React, {useContext, useState} from "react";
import axios from "axios";

function SearchAlbum() {
    // const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);

    const [searchResponse, setSearchResponse] = useState({});

    async function fetchAlbumData() {
        try {
            const response = await axios.get("https://musicbrainz.org/ws/2/release/?query=release:Patience%20&fmt=json");
            console.log(response);
            console.log(response.data.count);
            setSearchResponse(response.data);
            console.log("search result: ", searchResponse);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button onClick={() => fetchAlbumData()}>Zoek album</button>
    )
}

export default SearchAlbum