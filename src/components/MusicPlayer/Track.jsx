import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start gap-4">
    <div className="hidden sm:block h-16 w-16">
      <img src={activeSong?.images?.coverart} alt="active song cover art" className="rounded-xl" />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-slate-300">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
