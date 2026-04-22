"use client";

import CardVideo from "@/src/modules/videos/components/CardVideo";
import CardVideoCrown from "@/src/modules/videos/components/CardVideoCrown";
import { useVideos } from "@/src/modules/videos/hooks/useVideos";

export default function VideosPage() {
  const { data, loading, error } = useVideos();

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        Cargando videos...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );

  const crownVideo = data.find((video) => video.isCrown);

  const restVideos = data.filter((video) => !video.isCrown);

  return (
    <div className="p-6 bg-gray-200 min-h-screen space-y-10">
      {crownVideo && <CardVideoCrown crownVideo={crownVideo} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {restVideos.map((video, index) => (
          <CardVideo key={index} video={video} />
        ))}
      </div>
    </div>
  );
}
