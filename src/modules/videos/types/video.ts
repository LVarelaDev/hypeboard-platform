export interface Video {
  thumbnail: string;
  title: string;
  author: string;
  publishedAt: string;
  hype: number;
  isCrown: boolean;
}

export interface PaginatedVideos {
  data: Video[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
