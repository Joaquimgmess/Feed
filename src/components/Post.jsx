
function Post({ author, content }) {
  return (
    <div>
      <strong><h2>{author}</h2></strong>
      <p>{content}</p>
    </div>
  );
}

export default Post;