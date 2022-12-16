import { useDispatch, useSelector } from "react-redux";
import { SongCard, Loader, Error } from "../components";
import { genres } from "../assets/constants";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { selectGenreListId } from "../redux/features/playerSlice";

export default function Discover() {
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || "POP");

    if (isFetching) return <Loader title={`Loading songs...`} />;
    if (error) return <Error />;

    const genreTitle = genres.find(({value}) => value === genreListId)?.title;

    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row flex-col w-full mt-4 mb-10 justify-between items-center">
                <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
                <select
                    name=""
                    id=""
                    value={genreListId || "POP"}
                    onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                    className="mt-6 sm:mt-0 p-4 bg-gray-900 text-sm text-gray-300 rounded-lg outline-none">
                    {genres.map((genre) => (
                        <option key={genre.value} value={genre.value}>{genre.title}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
                {data?.map((song, i) => (
                    <SongCard
                        data={data}
                        key={song.key}
                        i={i}
                        song={song}
                        isPlaying={isPlaying}
                        activeSong={activeSong} />
                ))}
            </div>
        </div>
    )
}