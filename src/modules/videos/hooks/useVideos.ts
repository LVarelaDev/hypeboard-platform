"use client";

import { useEffect, useState } from "react";
import { Video } from "../types/video";
import { getVideos } from "../services/videos.service";

interface State {
  data: Video[];
  loading: boolean;
  error: string | null;
}

export const useVideos = () => {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  const fetchVideos = async () => {
    try {
      setState({ data: [], loading: true, error: null });

      const data = await getVideos();

      setState({
        data,
        loading: false,
        error: null,
      });
    } catch {
      setState({
        data: [],
        loading: false,
        error: "Error cargando videos",
      });
    }
  };

  useEffect(() => {
    async function fetchData() {
      await fetchVideos();
    }
    fetchData();
  }, []);

  return {
    ...state,
    refetch: fetchVideos,
  };
};
