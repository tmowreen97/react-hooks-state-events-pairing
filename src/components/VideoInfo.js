import React from "react";

function VideoInfo( { video } ){
  return(
    <div className="videoInfo">
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
    </div>
  )
  
}

export default VideoInfo;