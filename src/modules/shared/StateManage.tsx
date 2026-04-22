"use client";

import React from "react";

type AsyncStateProps<T> = {
  loading: boolean;
  error?: string | null;
  data: T | null;
  children: React.ReactNode;
};

const StateManager = <T,>({
  loading,
  error,
  data,
  children,
}: AsyncStateProps<T>) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Cargando...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        No hay datos
      </div>
    );
  }

  return <>{children}</>;
};

export default StateManager;
