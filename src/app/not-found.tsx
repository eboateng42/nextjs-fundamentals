"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>The page you requested for cannot be found</h1>
      <button onClick={() => router.push("/")} className="p-5 border">
        Go To Home
      </button>
    </div>
  );
}
