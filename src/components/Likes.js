import React from "react";

function Likes({ handleLike, handleDislike, likeBtn, dislikeBtn}){
  return(
    <div className="LikeBtns">
      <button onClick={handleLike}>{likeBtn} 👍</button><button onClick={handleDislike}>{dislikeBtn} 👎</button>
    </div>
    
  )
}

export default Likes;
