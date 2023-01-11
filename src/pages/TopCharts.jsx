import { useSelector } from "react-redux";
import { SongCard, Loader, Error } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function TopCharts() {

    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading top charts" />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="mt-4 mb-10 font-bold text-3xl text-gray-100 ">This are the top charts</h2>
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
