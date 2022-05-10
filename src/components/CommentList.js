import Comments from "./Comments";

function CommentList({ comments }) {
  console.log(comments);
  return (
    <div>
      <p>
        <strong>{comments.user}</strong>
      </p>
      <p>
        <small>{comments.comment}</small>
      </p>
    </div>
  );
}
export default CommentList;
