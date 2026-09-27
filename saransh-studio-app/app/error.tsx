"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">Error</p>
      <h1 className="text-4xl font-serif mb-6">Something Went Wrong</h1>
      <p className="text-neutral-400 text-sm max-w-md mb-8">An error occurred while loading this page. Please try again.</p>
      <Button onClick={() => reset()} variant="outline">Try Again</Button>
    </div>
  );
}
