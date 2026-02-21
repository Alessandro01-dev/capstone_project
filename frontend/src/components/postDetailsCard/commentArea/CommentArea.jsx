import AddComment from "./addComment/AddComment"
import SingleComment from "./singleComment/SingleComment"

const CommentArea = ({ comments, updatePost }) => {
  return (
    <div>
      <h3>Comments ({comments?.length})</h3>
      <AddComment
        onAdd={updatePost}
      />
      {comments && (
        <div
          className="d-flex flex-column gap-3"
        >
          {comments.map(comment => (
            <SingleComment
              key={comment._id}
              comment={comment}
              onDelete={updatePost} 
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentArea