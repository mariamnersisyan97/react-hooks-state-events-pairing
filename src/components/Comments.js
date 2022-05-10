import React from "react";
import { useState } from "react/cjs/react.production.min";
import CommentList from "./CommentList";

function Comments({ comments }) {
  const [hideComments, setHideComments] = useState(false);
  const hideUsers = !hideComments ? { display: "none" } : null;
  function handleCommentClick() {
    setHideComments((hideComments) => !hideComments);
  }
  return (
    <>
      <button handleCommentClick={handleCommentClick}>
        {hideComments ? "Hide Comments" : "Show Comments"}
        Hide Comments
      </button>
      <div style={hideUsers}>
        <h2> 2 Comments</h2>
        {comments.map((comment) => (
          <CommentList comments={comment} />
        ))}
      </div>
    </>
  );
}
export default Comments;
