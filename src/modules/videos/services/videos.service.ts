import { httpGet } from "@/src/lib/api/http";
import { PaginatedVideos } from "../types/video";

export const getVideos = async (
  page: number,
  searchField?: string,
  searchValue?: string,
): Promise<PaginatedVideos> => {
  const params = new URLSearchParams({
    page: String(page),
    limit: "10",
  });

  if (searchField && searchValue) {
    params.append("searchField", searchField);
    params.append("searchValue", searchValue);
  }

  return httpGet<PaginatedVideos>(`/api/videos?${params.toString()}`);
};
