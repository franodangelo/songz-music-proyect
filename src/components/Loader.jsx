import { Bars } from "react-loader-spinner";

export default function Loader({ title }) {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Bars
        height="80"
        width="80"
        radius="9"
        color='#f97316'
        ariaLabel='three-dots-loading'
        wrapperStyle
        wrapperClass
      />
      <h1 className="mt-2 font-bold text-2xl text-slate-100">{title || "Loading..."}</h1>
    </div>
  )
}

