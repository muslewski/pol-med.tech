import React, { useEffect, useRef } from "react";

function BackgroundVideo({ fallbackImage, video }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleCanPlayThrough = () => {
      // Play the video when it's fully loaded and ready
      videoElement.play();
    };

    if (videoElement) {
      // Add event listener to the video element
      videoElement.addEventListener("canplaythrough", handleCanPlayThrough);

      // Clean up the event listener on component unmount
      return () => {
        videoElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
      };
    }
  }, [video]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      autoPlay
      preload="auto"
      className="background"
      // poster={fallbackImage}
    >
      <source src={video} type="video/mp4" />
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
