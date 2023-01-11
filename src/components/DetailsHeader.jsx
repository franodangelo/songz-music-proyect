import { Link } from "react-router-dom";

export default function DetailsHeader({ artistId, artistData, songData }) {

    const artistIfo = artistData?.artists[artistId]?.attributes;

    return (
        <div className="relative flex flex-col w-full">
            <div className="w-full h-[120px] sm:h-[200px] bg-gradient-to-l from-transparent to-slate-900" />
            <div className="absolute flex inset-0 m-2 items-center">
                <img alt="art"
                    className="w-28 sm:w-48 h-28 sm:h-48 object-cover rounded-full border-2 shadow-xl shadow-slate-900"
                    src={artistId ?
                        artistIfo?.artwork?.url.replace(`{w}`, `400`).replace(`{h}`, `400`) :
                        songData?.images?.coverart} />
                <div className="ml-6">
                    <p className="mb-2 text-slate-400">
                        {artistId ? artistIfo?.genreNames[0] : songData?.genres?.primary}
                    </p>
                    <p className="font-bold text-xl sm:text-2xl text-slate-100">
                        {artistId ? artistIfo?.name : songData?.title}
                    </p>
                    {!artistId && (
                        <Link to={`/artists/${songData?.artists[0].adamid}`}>
                            <p className="mt-2 text-slate-400">{songData?.subtitle}</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}
