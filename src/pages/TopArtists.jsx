import { ArtistCard, Loader, Error } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function TopArtists() {

    const { data, isFetching, error } = useGetTopChartsQuery();

    if (isFetching) return <Loader title="Loading top charts" />;
    if (error) return <Error />;

    return (
        <div className="flex flex-col">
            <h2 className="mt-4 mb-10 font-bold text-3xl text-gray-100 ">Top artists right now</h2>
            <div className="flex flex-wrap justify-center sm:justify-start gap-8">
                {data?.map((track) => (
                    <ArtistCard
                        key={track.key}
                        track={track} />
                ))}
            </div>
        </div>
    )
}