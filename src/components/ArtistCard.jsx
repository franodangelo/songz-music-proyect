import { MdImageNotSupported } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function ArtistCard({ track }) {

  const navigate = useNavigate();

  return (
    <div
      // onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
      className="flex flex-col w-60 p-4 bg-gray-100/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      {track?.images?.background ?
        <img className="w-full h-56 rounded-lg"
          src={track?.images?.background}
          alt="Artist cover"
        /> :
        <div className="flex flex-col w-full h-56 items-center justify-center rounded-l">
          <MdImageNotSupported className="w-full h-40 text-gray-500" />
          <p className="text-sm text-gray-200">Image not found</p>
        </div>}
      <p className="mt-4 font-semibold text-lg text-gray-100 truncate">{track?.subtitle}</p>
    </div>
  )
}

