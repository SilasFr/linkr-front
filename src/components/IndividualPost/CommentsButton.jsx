import { CommentButtonContainer, StyledCommentButton } from "./styles";

export default function CommentsButton({ isCommenting, setIsCommenting }) {
  function handleComment() {
    setIsCommenting(!isCommenting);
  }
  return (
    <CommentButtonContainer>
      <StyledCommentButton onClick={handleComment}></StyledCommentButton>
      <p>0 comments</p>
    </CommentButtonContainer>
  );
}
