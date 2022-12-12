import { useDispatch, useSelector } from "react-redux";
import { SongCard, Loader, Error } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function Discover() {
    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title={`Loading songs...`} />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row flex-col w-full mt-4 mb-10 justify-between items-center">
                <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
                <select name="" id="" value=""
                    onChange={() => { }}
                    className="mt-5 sm:mt-0 p-4 bg-gray-900 text-sm text-gray-300 rounded-lg outline-none">
                    {genres.map((genre) => {
                        return <option key={genre.value} value={genre.value}>{genre.title}</option>
                    })}
                </select>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
                {data?.map((song, i) => {
                    return <SongCard
                        data={data}
                        key={song.key}
                        i={i}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong} />
                })}
            </div>
        </div>
    )
}