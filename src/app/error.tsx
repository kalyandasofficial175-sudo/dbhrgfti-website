"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-yellow-400 font-bold text-lg mb-2">Something went wrong</p>
        <p className="text-gray-400 text-sm mb-6">{error.message}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-5 py-2 rounded-lg text-sm transition-colors"
          >
            Try again
          </button>
          <Link href="/" className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-2 rounded-lg text-sm transition-colors">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
