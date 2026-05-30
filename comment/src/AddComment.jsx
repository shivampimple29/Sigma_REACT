import { useState } from "react";
import "./AddComment.css";
import Comment from "./Comment.jsx";

function AddComment() {
  let [comment, setComment] = useState([
    {
      username: "Radha",
      remark: "V Good",
      rating: 5,
      idx:0
    },
  ]);

  function dispComment(comment) {
    setComment((currComment) => [...currComment, comment]);
  }

  return (
    <>
      <Comment dispComment={dispComment}/>
      <hr />
      <div>
        <h3>All Comments</h3>
          {comment.map((currComment,idx)=>
          (
        <div className="comment" key={idx}>

            <span>username : {currComment.username}</span>
            <br />
            <br />
            <span>Remarks :{currComment.remark}</span>
            <br />
            <br />
            <span>Rating :{currComment.rating}</span>
        </div>
          )
          )}
      </div>
    </>
  )
}

export default AddComment;
