"use client";

import StateManager from "../../shared/StateManage";
import { useVideos } from "../hooks/useVideos";
import CardVideo from "./CardVideo";
import CardVideoCrown from "./CardVideoCrown";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const Video = () => {
  const {
    data,
    pagination,
    loading,
    error,
    page,
    setPage,
    handleSearch,
    resetSearch,
  } = useVideos();

  const crownVideo = data.find((video) => video.isCrown);
  const restVideos = data.filter((video) => !video.isCrown);

  return (
    <StateManager loading={loading} data={data} error={error}>
      <div className="p-6 bg-gray-200 space-y-10">
        <SearchBar onSearch={handleSearch} onReset={resetSearch} />

        {crownVideo && <CardVideoCrown crownVideo={crownVideo} />}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {restVideos.map((video, index) => (
            <CardVideo key={index} video={video} />
          ))}
        </div>

        {pagination && (
          <Pagination
            page={page}
            totalPages={pagination.totalPages}
            setPage={setPage}
            totalRecords={pagination.total}
          />
        )}
      </div>
    </StateManager>
  );
};

export default Video;
