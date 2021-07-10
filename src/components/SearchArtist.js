import React, {useContext, useState} from "react";
import axios from "axios";

function SearchArtist() {
    // const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);

    const [searchResponse, setSearchResponse] = useState({});

    async function fetchArtistData() {
        try {
            const response = await axios.get("https://musicbrainz.org/ws/2/artist/?query=type:group%20AND%20country:NL&fmt=json");
            // const response = await axios.get("https://musicbrainz.org/ws/2/artist/?query=artist:michael%20ANDjackson%20AND%20country:US&fmt=json");
            console.log(response);
            console.log(response.data.count);
            setSearchResponse(response.data);
            console.log("search result: ", searchResponse);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button onClick={() => fetchArtistData()}>Zoek artiest</button>
    )
}

export default SearchArtist
