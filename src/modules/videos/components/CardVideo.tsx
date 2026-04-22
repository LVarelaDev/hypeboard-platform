import React from "react";
import { Video } from "../types/video";
import Image from "next/image";

interface CardVideoProps {
  video: Video;
}

const CardVideo = ({ video }: CardVideoProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={500}
        height={176}
        className="w-full h-44 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-gray-800 line-clamp-2">
          {video.title}
        </h3>

        <p className="text-sm text-gray-500">{video.author}</p>

        <div className="mt-3 flex justify-between text-sm">
          <span className="text-indigo-600 font-medium">
            🔥 {video.hype.toFixed(2)}
          </span>

          <span className="text-gray-400">{video.publishedAt}</span>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
