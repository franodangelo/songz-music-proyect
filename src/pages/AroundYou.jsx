import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { SongCard, Loader, Error } from "../components";

export default function AroundYou() {

    const [country, setCountry] = useState("");
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector(state => state.player);

    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=at_MAjsSr22BoweULUpuBx69tv9K1NJV`)
            .then(res => setCountry(res?.data?.location?.country))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, [country])


    return (
        <div>

        </div>
    )
}

