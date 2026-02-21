import AddComment from "./addComment/AddComment"
import SingleComment from "./singleComment/SingleComment"

const CommentArea = ({ comments }) => {
  return (
    <div>
      <h3>Comments ({comments.length})</h3>
      <AddComment />
      {comments && (
        <div
          className="d-flex flex-column gap-3"
        >
          {comments.map(comment => (
            <SingleComment
              key={comment.content}
              comment={comment}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentArea