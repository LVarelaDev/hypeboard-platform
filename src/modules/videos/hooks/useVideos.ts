"use client";

import { useEffect, useState } from "react";
import { Video } from "../types/video";
import { getVideos } from "../services/videos.service";

interface State {
  data: Video[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  } | null;
  loading: boolean;
  error: string | null;
}

type SearchField = "author" | "title" | "";

export const useVideos = () => {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState<{
    field: SearchField;
    value: string;
  }>({
    field: "",
    value: "",
  });

  const [state, setState] = useState<State>({
    data: [],
    pagination: null,
    loading: true,
    error: null,
  });

  const fetchVideos = async (
    pageNumber: number,
    searchField?: string,
    searchValue?: string,
  ) => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }));

      const res = await getVideos(pageNumber, searchField, searchValue);

      setState({
        data: res.data,
        pagination: {
          total: res.total,
          page: res.page,
          limit: res.limit,
          totalPages: res.totalPages,
        },
        loading: false,
        error: null,
      });
    } catch {
      setState({
        data: [],
        pagination: null,
        loading: false,
        error: "Error cargando videos",
      });
    }
  };

  useEffect(() => {
    async function load() {
      await fetchVideos(page, search.field, search.value);
    }
    load();
  }, [page, search]);

  const handleSearch = (field: "author" | "title", value: string) => {
    setPage(1);
    setSearch({ field, value });
  };

  const resetSearch = () => {
    setPage(1);
    setSearch({ field: "", value: "" });
  };

  return {
    ...state,
    page,
    setPage,
    handleSearch,
    resetSearch,
    refetch: () => fetchVideos(page, search.field, search.value),
  };
};
