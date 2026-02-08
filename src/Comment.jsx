import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment() {
  let [comments, setCommemts] = useState([{
    username: "@harish",
    remark: "Amazing",
    rating: "5",
}]);

  let addNewComment = (comment) => {
    setCommemts((currComments) => [...currComments, comment]);
    console.log("added new comments");
  };
  return (
    <div>
      <h2>All Comment</h2>
      {comments.map((comments, idx) => (
        <div className="comment" key={idx}>
          <span>{comments.remark}</span>
          &nbsp;
          <span>Rating:{comments.rating}</span>
          <p>-{comments.username}</p>
        </div>
      ))}

      <hr />
      <CommentForm addNewComment={addNewComment} />
    </div>
  );
}
