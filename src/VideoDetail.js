import React from "react";
import "./styles/styles.css";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div className="fra">
      <div className="">
        <iframe
          src={videoSrc}
          allowFullScreen
          title="Video player"
          width="600"
          height="400"
        />
      </div>
      <div className="">
        <h4 className="">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
