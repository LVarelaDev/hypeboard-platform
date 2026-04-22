import Image from "next/image";
import React from "react";
import { Video } from "../types/video";

interface CardVideoCrownProps {
  crownVideo: Video;
}

const CardVideoCrown = ({ crownVideo }: CardVideoCrownProps) => {
  return (
    <div className="relative bg-linear-to-r from-yellow-100 via-yellow-50 to-white border-4 border-yellow-400 rounded-2xl overflow-hidden shadow-xl">
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={crownVideo.thumbnail}
          alt={crownVideo.title}
          width={500}
          height={288}
          className="w-full h-72 object-cover"
        />

        <div className="p-6 flex flex-col justify-center">
          <span className="text-yellow-600 font-bold text-sm uppercase">
            👑 Joya de la Corona
          </span>

          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            {crownVideo.title}
          </h1>

          <p className="text-gray-500 mt-1">{crownVideo.author}</p>

          <p className="mt-4 text-indigo-600 font-semibold">
            🔥 Hype máximo: {crownVideo.hype.toFixed(2)}
          </p>

          <p className="text-sm text-gray-400 mt-2">{crownVideo.publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default CardVideoCrown;
