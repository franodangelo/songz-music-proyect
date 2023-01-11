import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

export default function PlayPause({ isPlaying, activeSong, song, handlePause, handlePlay }) {
    return (
        (isPlaying && activeSong?.title === song.title) ?
            <FaPauseCircle size={40} className="text-slate-300" onClick={handlePause} /> :
            <FaPlayCircle size={40} className="text-slate-300" onClick={handlePlay} />
    )
}
