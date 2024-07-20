import React from "react";

function VideoObject({
  id,
  icon,
  videoSrc,
  title,
  description,
  setVideo,
  currentVideoId,
}) {
  return (
    <img
      className={`p-3 transition-all cursor-pointer ${
        currentVideoId != id ? "hover:scale-110" : "hover:brightness-90"
      }`}
      src={icon}
      alt=""
      draggable="false"
      onClick={() =>
        setVideo({
          id: id,
          videoSrc: videoSrc,
          title: title,
          description: description,
        })
      }
      style={{
        height: currentVideoId == id ? "5.5rem" : "4.5rem",
        opacity: currentVideoId == id ? "100%" : "50%",
      }}
    />
  );
}

export default VideoObject;
