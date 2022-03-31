import { api } from "../../services/api";
import { CommentButtonContainer, StyledCommentButton } from "./styles";

export default function CommentsButton({
  quantity,
  setCommentsList,
  postId,
  isCommenting,
  setIsCommenting,
}) {
  async function handleComment() {
    if (!isCommenting) {
      try {
        const response = await api.readComments(
          postId,
          "141c6005-9736-4ebc-b524-fa537d0f1bc6"
        );
        setCommentsList(response.data);
      } catch (e) {
        console.log(e);
        alert("Erro ao receber os comentários");
        setIsCommenting(!isCommenting);
      }
    }

    setIsCommenting(!isCommenting);
  }
  return (
    <CommentButtonContainer>
      <StyledCommentButton onClick={handleComment}></StyledCommentButton>
      <p>{quantity} comments</p>
    </CommentButtonContainer>
  );
}
