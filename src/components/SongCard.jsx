import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

export default function SongCard({ song, i }) {

    const activeSong = "Test";

    return (
        <div className="flex flex-col w-60 p-4 rounded-lg bg-gray-50/10 bg-opacity-80 backdrop-blur-sm animate-slideup cursor-pointer">
            <div className="relative w-full h-56 group">
                <div className={`absolute inset-0 justify-center items-center bg-gray-900 bg-opacity-50 group-hover:flex 
        ${activeSong?.title === song.title ?
                        "flex bg-gray-900 bg-opacity-75" :
                        "hidden"}`}>
                    <PlayPause />
                </div>
                <div className="w-full h-full rounded-lg">
                    <img className="rounded object-contain" src={song.images?.coverart} alt={`${song.title} thumbnail`} />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Link to={`/songs/${song?.key}`}>
                    <h2 className="font-semibold text-xl text-gray-100 truncate">{song.title}</h2>
                </Link>
                <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : "/top/artists"}>
                    <h3 className="font-light text-sm text-gray-400">{song.subtitle}</h3>
                </Link>
            </div>
        </div>
    )
}

