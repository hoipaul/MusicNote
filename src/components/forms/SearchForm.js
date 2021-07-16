import axios from "axios";
import {useForm} from "react-hook-form";
import React, {useEffect, useState} from 'react';

// import {authContext} from "../contexts/AuthContext";

export default function Search() {
    const {handleSubmit, register, formState: {errors, isDirty, isValid}} = useForm({mode: "onChange"});
    const onSubmit = (data) => JSON.stringify(data);
    const [artistData, setArtistData] = useState({});
    const [albumData, setAlbumData] = useState({});
    const [trackData, setTrackData] = useState({});

    async function fetchArtistData() {
        try {
            const response = await axios.get("https://musicbrainz.org/ws/2/artist/?query=type:group%20AND%20country:NL&fmt=json");
            // const response = await axios.get("https://musicbrainz.org/ws/2/artist/?query=artist:michael%20ANDjackson%20AND%20country:US&fmt=json");
            console.log(response);
            console.log(response.data.count);
            setArtistData(response.data);
            console.log("search result: ", artistData);
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchAlbumData() {
        try {
            const response = await axios.get("https://musicbrainz.org/ws/2/release/?query=release:Patience%20&fmt=json");
            console.log(response);
            console.log(response.data.count);
            setAlbumData(response.data);
            console.log("search result: ", albumData);
        } catch (e) {
            console.error(e);
        }
    }

    async function fetchTrackData() {
        try {
            const response = await axios.get("https://musicbrainz.org/ws/2/recording?query=%22we%20will%20rock%20you%22%20AND%20arid:0383dadf-2a4e-4d10-a46a-e9e041da8eb3&fmt=json");
            console.log(response);
            console.log(response.data.count);
            setTrackData(response.data);
            console.log("search result: ", trackData);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="search-field">
            <fieldset>
                <form className="submit-form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="search-artist">
                        Zoek op artiest
                        <input
                            type="text"
                            id="search-artist-field"
                            name="search-artist"
                            {...register("searchArtist", {
                                required: {
                                    value: true,
                                    message: 'Vul au.b. een zoekterm voor een artiest in',
                                },
                            })}
                        />
                        {errors.searchArtist && <p className="error-message">{errors.searchArtist.message}</p>}

                    </label>
                    <button id="artist-search-button"
                            onClick={() => fetchArtistData(true)}
                            type="submit"
                            className="form-button"
                            disabled={!isDirty || !isValid}
                    >Zoek artiest
                    </button>
                    <label htmlFor="search-album">
                        Zoek op album
                        <input
                            type="text"
                            id="search-album-field"
                            name="search-album"
                            {...register("searchAlbum", {
                                required: {
                                    value: true,
                                    message: 'Vul au.b. een zoekterm voor een album in',
                                },
                            })}
                        />
                        {errors.searchAlbum && <p className="error-message">{errors.searchAlbum.message}</p>}
                    </label>
                    <button id="album-search-button"
                            onClick={() => fetchAlbumData()}
                            type="submit"
                            className="form-button"
                            disabled={!isDirty || !isValid}
                    >Zoek album
                    </button>
                    <label htmlFor="search-track">
                        Zoek op track
                        <input
                            type="text"
                            id="search-track-field"
                            name="search-track"
                            {...register("searchTrack", {
                                required: {
                                    value: true,
                                    message: 'Vul au.b. een zoekterm voor een track in',
                                },
                            })}
                        />
                        {errors.searchTrack && <p className="error-message">{errors.searchTrack.message}</p>}
                    </label>
                    <button id="track-search-button"
                            onClick={() => fetchTrackData()}
                            type="submit"
                            className="form-button"
                            disabled={!isDirty || !isValid}
                    >Zoek track
                    </button>
                </form>
            </fieldset>
        </div>
    )
};