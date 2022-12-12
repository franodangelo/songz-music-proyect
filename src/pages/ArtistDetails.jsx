import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, RelatedSongs, Loader, Error } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

export default function ArtistDetails() {

    const { id: artistId } = useParams();
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

    if (isFetchingArtistDetails) return <Loader title="Searching artist details..." />;
    if (error) return <Error />;
    console.log(error);

    return (
        <div className="flex flex-col">
            <DetailsHeader
                artistId={artistId}
                artistData={artistData} />
            <RelatedSongs
                data={Object.values(artistData?.songs)}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong} />
        </div>
    )
}