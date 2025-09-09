import React from "react";

// Import GIFs from assets folder
import scrollingGif1 from "../../assets/images/scrollingGif1.gif";
import scrollingGif2 from "../../assets/images/scrollingGif2.gif";
import scrollingGif3 from "../../assets/images/scrollingGif3.gif";
import scrollingGif4 from "../../assets/images/scrollingGif4.gif";

const ScrollingGifBanner = () => {
  const gifs = [scrollingGif1, scrollingGif2, scrollingGif3, scrollingGif4];

  return (
    <div className="overflow-hidden py-4 border bg-white">
      <div
        className="d-flex align-items-center"
        style={{
          animation: "scroll-left 25s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {gifs.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`gif-${idx}`}
            className="mx-3"
            style={{ height: "60px", objectFit: "contain" }}
          />
        ))}

        {/* Duplicate to create seamless loop */}
        {gifs.map((src, idx) => (
          <img
            key={`dup-${idx}`}
            src={src}
            alt={`gif-dup-${idx}`}
            className="mx-3"
            style={{ height: "60px", objectFit: "contain" }}
          />
        ))}
      </div>

      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ScrollingGifBanner;
