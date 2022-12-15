import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

function TopChartCard({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {
    return (
        <div className="flex w-full mb-2 py-2 px-4 items-center rounded-lg cursor-pointer hover:bg-slate-500">
            <h3 className="mr-4 font-bold text-gray-100">#{i + 1}</h3>
            <div className="flex flex-1 justify-between items-center">
                <img src={song?.images.coverart} alt={song?.title} className="w-16 h-16 rounded-lg" />
                <div className="flex flex-1 flex-col mx-4 justify-center">
                    <Link to={`/songs/${song.key}`}>
                        <p className="font-bold text-xl text-gray-100">{song?.title}</p>
                    </Link>
                    <Link to={`/artists/${song?.artists[0].adamid}`}>
                        <p className="mt-1 font-semibold text-gray-300">{song?.subtitle}</p>
                    </Link>
                </div>
            </div>
            <PlayPause
                isPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePauseClick}
                handlePlay={handlePlayClick} />
        </div>
    )
}

export default function TopPlay() {

    const dispatch = useDispatch();
    const { activeSong, isPlaying } = useSelector(state => state.player);
    const { data } = useGetTopChartsQuery();
    const divRef = useRef(null);

    useEffect(() => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    })

    const topPlays = data?.slice(0, 5);

    function handlePauseClick() {
        dispatch(playPause(false));
    }

    function handlePlayClick(song, i) {
        dispatch(setActiveSong({ song, data, i }));
        dispatch(playPause(true));
    }

    return (
        <div ref={divRef} className="flex flex-1 flex-col max-w-full xl:max-w-[520px] ml-0 xl:ml-6 mb-6 xl:mb-0">
            <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl text-gray-100">Top charts</h2>
                    <Link to="/top-charts">
                        <p className="text-gray-300 cursor-pointer">See more</p>
                    </Link>
                </div>
                <div className="flex flex-col mt-4 gap-2">
                    {topPlays?.map((song, i) => (
                        <TopChartCard
                            key={song.key}
                            song={song}
                            i={i}
                            isPlaying={isPlaying}
                            activeSong={activeSong}
                            handlePauseClick={handlePauseClick}
                            handlePlayClick={() => handlePlayClick(song, i)} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col w-full mt-8">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl text-gray-100">Top artists</h2>
                    <Link to="/top-artists">
                        <p className="text-gray-300 cursor-pointer">See more</p>
                    </Link>
                </div>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={16}
                    freeMode
                    centeredSlides
                    centeredSlidesBounds
                    modules={[FreeMode]}
                    className="mt-4">
                    {topPlays?.map((song, i) => (
                        <SwiperSlide
                            key={song?.key}
                            style={{ width: "20%", height: "auto" }}
                            className="rounded-full shadow-lg animate-slideright">
                            {/* <Link to={`/artists/${song?.artists[0].adamid}`}> */}
                                <img src={song?.images.background} alt="name" className="w-full rounded-full object-cover" />
                            {/* </Link> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
