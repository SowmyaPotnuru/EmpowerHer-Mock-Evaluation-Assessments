import React from "react"
function ToPostCard({userId,title,body}){
  return(
    <div style={{border:"1px solid black",margin:"5px",padding:"3px"}}>
      <p><strong>Title:</strong>{title}</p>
      <p><strong>Body:</strong>{body}</p>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )

}
export default ToPostCard;
