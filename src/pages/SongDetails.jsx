import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, RelatedSongs, Loader, Error } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

export default function SongDetails() {

    const { songid } = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-100">Lyrics</h2>
                <div className="mt-4">
                    {songData?.sections[1].type === "LYRICS" ?
                        songData?.sections[1].text.map((line, i) => (
                            <p className="text-gray-400 my-1">{line}</p>
                        )) : <p className="text-gray-400 my-1">{`We don't have the lyrics yet :(`}</p>
                    }
                </div>
            </div>
        </div>
    )
}
