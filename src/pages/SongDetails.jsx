import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, RelatedSongs, Loader, Error } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery, useGetRelatedSongsQuery } from "../redux/services/shazamCore";

export default function SongDetails() {

    const { songid } = useParams();
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);
    const { data, isFetching: isFetchingRelatedSongs, error } = useGetRelatedSongsQuery(songid);

    function handlePauseClick() {
        dispatch(playPause(false));
    }

    function handlePlayClick(song, i) {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    }

    if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details..." />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <DetailsHeader artistId="" songData={songData} />
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-slate-100">Lyrics</h2>
                <div className="mt-4">
                    {songData?.sections[1].type === "LYRICS" ?
                        songData?.sections[1].text.map((line, i) => (
                            <p className="text-slate-400 my-1">{line}</p>
                        )) : <p className="text-slate-400 my-1">{`We don't have the lyrics yet :(`}</p>
                    }
                </div>
            </div>
            <RelatedSongs
                data={data}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick} />
        </div>
    )
}
