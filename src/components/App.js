import { useState } from "react";
import video from "../data/video.js";
import Likes from "./Likes"
import Comments from "./Comments.js";
import VideoInfo from "./VideoInfo.js";

function App() {
  const [likeBtn, setLikeBtn]= useState(video.upvotes)
  const [dislikeBtn, setDislikeBtn] = useState(video.downvotes)

  function handleLike(){
    setLikeBtn((likeBtn) => likeBtn+1 )
  }
  
  function handleDislike(){
    setDislikeBtn((dislikeBtn)=> dislikeBtn+1)
  }

  
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dpw9EHDh2bM"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoInfo video={video} />
      <Likes handleLike={handleLike} handleDislike={handleDislike} likeBtn={likeBtn} dislikeBtn={dislikeBtn}/>
      <Comments info={video} />
    </div>
  );
}

export default App;
