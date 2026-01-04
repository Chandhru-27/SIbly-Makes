import React, { useEffect, useRef } from "react";
import { useLoadingStore } from "../../store/useLoadingStore";
import { cn } from "../../lib/utils";

const assets = [
  "/assets/bow.webp",
  "/assets/dog.webp",
  "/assets/heart.webp",
  "/assets/keychain.webp",
  "/assets/leaf.webp",
  "/assets/logo.webp",
  "/assets/shield.webp",
  "/assets/yarn.webp",
  "/assets/collections/beanie.webp",
  "/assets/collections/bowchains.webp",
  "/assets/collections/carrybag.webp",
  "/assets/collections/Keychain.webp",
  "/assets/collections/petchains.webp",
  "/assets/collections/tabledecorations.webp",
  "/assets/collections/toolips.webp",
  "/assets/profiles/aakash.webp",
  "/assets/profiles/chandhru.webp",
  "/assets/socials/instapost1.webp",
  "/assets/socials/instapost2.webp",
  "/assets/socials/instapost3.webp",
  "/assets/socials/instapost4.webp",
  "/assets/socials/instapost5.webp",
  "/assets/carousel/baby-hat-svgrepo-com.svg",
  "/assets/carousel/eraser.svg",
  "/assets/carousel/pen.svg",
  "/assets/carousel/pencil.svg",
  "/assets/carousel/pin.svg",
  "/assets/carousel/sciscor.svg",
  "/assets/carousel/tailoringmachine.svg",
  "/assets/carousel/threadhook.svg",
  "/assets/carousel/yarn.svg",
];

const Loading = React.memo(({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useLoadingStore((set) => set.progress);
  const setProgress = useLoadingStore((set) => set.setProgress);
  const finishLoading = useLoadingStore((set) => set.finishLoading);

  useEffect(() => {
    let totalBytes = 0;
    let loadedBytes = 0;

    async function assetLoader() {
      // Step 1 : get the sizes of every image
      const sizes = await Promise.all(
        assets.map(async (url) => {
          try {
            const res = await fetch(url, { method: "HEAD" });
            return Number(res.headers.get("content-length") || 0);
          } catch (e) {
            console.warn("Failed to head:", url);
            return 0;
          }
        })
      );

      // Step 2 : compute total sizes
      totalBytes = sizes.reduce((a, b) => a + b, 0);

      // Guard against division by zero if totalBytes is 0
      const safeTotal = totalBytes || 1;

      // Step 3 : Download all assets
      for (let url of assets) {
        try {
          const res = await fetch(url);
          const reader = res.body?.getReader();

          if (!reader) continue;

          if (reader) {
            console.log("loaded: ", url);
          }

          // Step 4: Read chunks
          while (true) {
            const { done, value } = await reader.read();

            if (done || !value) break;

            loadedBytes += value?.byteLength;

            // Step 5: Set progress
            const loaderProgressPercent = Math.floor(
              (loadedBytes / safeTotal) * 100
            );

            // Cap at 100 to prevent overflow visual glitches
            setProgress(loaderProgressPercent);
            console.log(loaderProgressPercent);
          }
        } catch (error) {
          console.error("Error loading asset:", url, error);
        }
      }
      finishLoading();
    }

    assetLoader();
  }, [setProgress, finishLoading]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "min-h-screen z-99999 bg-[#2f2f2f] bg-[linear-gradient(135deg,#0e081d_0%,#1a0f2e_50%,#0e081d_100%)] flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-blue-100",
        className
      )}
    >
      {/* Background Blobs - Slightly adjusted for a softer 'cloud' feel */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50/80 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>

      <div className="z-10 flex flex-col items-center relative">
        {/* Animated Yarn Ball Icon */}
        <div className="mb-6 relative">
          <div className="animate-[spin_8s_linear_infinite]">
            <svg
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-300 "
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5c-.3.7-.5 1.5-.5 2.2a4 4 0 0 0 4 4c.7 0 1.5-.2 2.2-.5" />
              <path d="M16 12h.01" />
              <path d="M8 12h.01" />
              <path d="M12 16h.01" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          {/* Center Percentage */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-blue-500">{progress}%</span>
          </div>
        </div>

        {/* Text Label */}
        <p className="text-gray-400 text-md font-medium tracking-[0.2em] uppercase mb-10 animate-pulse">
          Stitching Assets...
        </p>

        {/* Crafty Progress Bar */}
        {/* We use w-72 to give the hook room to move */}
        <div className="w-82 h-2 bg-gray-100 rounded-full relative mx-8">
          {/* The "Thread" (Progress Fill) */}
          <div
            className="h-full bg-blue-400 rounded-l-full relative transition-all duration-200 ease-linear shadow-[0_2px_10px_rgba(96,165,250,0.4)]"
            style={{ width: `${progress}%` }}
          >
            {/* The Crochet Hook (Follows the progress) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20">
              {/* Adding a slight wiggle animation to the hook to make it look like it's working */}
              <div className="animate-[wiggle_1s_ease-in-out_infinite] origin-left">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-500 drop-shadow-sm rotate-45 transform"
                >
                  <path d="M16.5 5.5A2.1 2.1 0 0 0 13.5 8.5L20 15" />
                  <path d="M12 11 4 19a2.8 2.8 0 0 0 4 4l8-8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Loading;
