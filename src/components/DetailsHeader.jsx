import { Link } from "react-router-dom";

export default function DetailsHeader({ artistId, artistData, songData }) {

    const artistIfo = artistData?.artists[artistId]?.attributes;

    return (
        <div className="relative flex flex-col w-full">
            <div className="w-full h-[120px] sm:h-[200px] bg-gradient-to-l from-transparent to-slate-900" />
            <div className="absolute flex inset-0 items-center">
                <img
                    className="w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] object-cover rounded-full border-2 shadow-lg shadow-slate-900"
                    src={artistId ?
                        artistIfo?.artwork?.url.replace(`{w}`, `400`).replace(`{h}`, `400`) :
                        songData?.images?.coverart}
                    alt="art" />
                <div className="ml-">
                    <p className="mb-2 text-gray-400">
                        {artistId ? artistIfo?.genreNames[0] : songData?.genres?.primary}
                    </p>
                    <p className="font-bold text-xl sm:text-2xl text-gray-100">
                        {artistId ? artistIfo?.name : songData?.title}
                    </p>
                    {!artistId && (
                        <Link to={`/artists/${songData?.artists[0].adamid}`}>
                            <p className="mt-2 text-gray-400">{songData?.subtitle}</p>
                        </Link>
                    )}
                </div>
            </div>
            <div className="w-full h-24 sm:h-44" />
        </div>
    )
}
