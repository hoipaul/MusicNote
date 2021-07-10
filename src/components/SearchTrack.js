import React, {useContext, useState} from "react";
import axios from "axios";

function SearchTrack() {
    // const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);

    const [searchResponse, setSearchResponse] = useState({});

    async function fetchTrackData() {
        try {
            const response = await axios.get("https://musicbrainz.org/ws/2/recording?query=%22we%20will%20rock%20you%22%20AND%20arid:0383dadf-2a4e-4d10-a46a-e9e041da8eb3&fmt=json");
            console.log(response);
            console.log(response.data.count);
            setSearchResponse(response.data);
            console.log("search result: ", searchResponse);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button onClick={() => fetchTrackData()}>Zoek track</button>
    )
}

export default SearchTrack
