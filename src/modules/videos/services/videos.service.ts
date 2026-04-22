import { httpGet } from "@/src/lib/api/http";
import { Video } from "../types/video";

export const getVideos = async (): Promise<Video[]> => {
  return httpGet<Video[]>("/api/videos");
};
