import React from "react";

function BackgroundVideo({ fallbackImage, video }) {
  return (
    <video
      loop
      muted
      playsInline
      autoPlay
      preload="auto"
      className="background brightness-75"
      poster={fallbackImage}
    >
      {/* <source src={video} type="video/mp4" /> */}
      <img
        src={fallbackImage}
        className="background brightness-75"
        alt="Fallback Image"
      />
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;
