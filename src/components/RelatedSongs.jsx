import SongBar from "./SongBar";

export default function RelatedSongs({ data, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-3xl text-slate-100">Related songs</h1>
            <div className="flex flex-col w-full mt-6">
                {
                    data?.map((song, i) => (
                        <SongBar key={`${song.key}/${artistId}`}
                            song={song}
                            i={i}
                            artistId={artistId}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            handlePauseClick={handlePauseClick}
                            handlePlayClick={handlePlayClick}
                        />
                    ))}
            </div>
        </div>
    )
}

