import { CommentButtonContainer, StyledCommentButton } from "./styles";

export default function CommentsButton() {
  return (
    <CommentButtonContainer>
      <StyledCommentButton></StyledCommentButton>
      <p>0 comments</p>
    </CommentButtonContainer>
  );
}
