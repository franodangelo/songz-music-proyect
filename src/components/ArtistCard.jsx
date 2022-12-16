import { useNavigate } from "react-router-dom";

export default function ArtistCard({ track }) {

  const navigate = useNavigate();

  return (
    <div
      // onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
      className="flex flex-col w-60 p-4 bg-gray-100/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <img className="w-full h-56 rounded-lg"
        src={track?.images?.coverart}
        alt="Artist cover" />
      <p className="mt-4 font-semibold text-lg text-gray-100 truncate">{track?.subtitle}</p>
    </div>
  )
}

