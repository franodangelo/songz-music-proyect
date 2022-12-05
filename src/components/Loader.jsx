import { loader } from "../assets";

export default function Loader({ title }) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <img src={loader} alt="loader gif" className="w-32 h-32 object-contain" />
      <h1 className="mt-2 font-bold text-2xl text-gray-100">{title || "Loading..."}</h1>
    </div>
  )
}

