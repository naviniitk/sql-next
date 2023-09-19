"use client"; // Error components must be Client Components

import { Strings } from "@/constants";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h2>{error.message}</h2>
      <button
        className="p-2 bg-red-400 rounded"
        onClick={
          () => reset()
        }
      >
        {Strings.TRY_AGAIN}
      </button>
    </div>
  );
}
