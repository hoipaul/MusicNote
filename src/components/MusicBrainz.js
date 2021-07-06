import React, {useContext, useState} from "react";
import axios from "axios";

export default function SearchMusicBrainz() {
    // const {selectedCountries, setSelectedCountries} = useContext(selectedOptionsContext);

    const [searchResponse, setSearchResponse] = useState({});


    async function fetchData() {
        try {
            const response = await axios.get("https://musicbrainz.org/ws/2/artist/?query=type:group%20AND%20country:NL&fmt=json");
            console.log(response);
            console.log(response.data.count);
            setSearchResponse(response.data);
            console.log("search result: ", searchResponse);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <button onClick={() => fetchData()}>Search MusicBrainz</button>
    )
}
