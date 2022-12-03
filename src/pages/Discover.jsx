import React from "react";
import { SongCard, Loader, Error } from "../components";
import { genres } from "../assets/constants";

export default function Discover() {
    console.log(genres);
    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row flex-col w-full mt-4 mb-10 justify-between items-center">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
                <select name="" id="" value=""
                    onChange={() => { }}
                    className="mt-5 sm:mt-0 p-4 bg-black text-sm text-gray-300 rounded-lg outline-none">
                    {genres.map(genre => {
                        return <option key={genre.value} value={genre.value}>{genre.title}</option>
                    })}
                </select>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((song, i) => {
                    return <SongCard key={song.key} song={song} i={i} />
                })}
            </div>
        </div>
    )
}