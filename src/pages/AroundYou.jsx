import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { SongCard, Loader, Error } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

export default function AroundYou() {

    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data, isFetching, error } = useGetSongsByCountryQuery(country);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=at_MAjsSr22BoweULUpuBx69tv9K1NJV`)
            .then(res => setCountry(res?.data?.location?.country))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [country])

    if (isFetching && loading) return <Loader title="Loading songs around you" />;
    if (error && country) return <Error />;

    return (
        <div className="flex flex-col">
            <div className="flex flex-col mt-4 mb-10 text-gray-100">
                <span className="font-black">{country}</span>
                <h2 className="font-bold text-3xl">Around you</h2>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        key={song.key}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        data={data}
                        i={i} />
                ))}
            </div>
        </div>
    )
}

