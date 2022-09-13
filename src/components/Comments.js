import React, { useState } from "react";


function Comments( {info} ){
  const [toggle, setToggle] = useState(true)

  return (
    <div>
      <button onClick= {() => setToggle(!toggle)}>{toggle ? 'Hide Comments' : 'Show Comments'}</button>
      {toggle && (
        <div>
          <h2>{info.comments.length} Comments</h2>
          {info.comments.map((user)=>{
            return(
              <div>
                <h3>{user.user}</h3>
                <p>{user.comment}</p>
              </div>
            )
          }
          )}
        </div>
      )}
    </div>
  )
}

export default Comments;