import { useState } from "react";
import { api } from "../../services/api";
import { CommentButtonContainer, StyledCommentButton } from "./styles";

export default function CommentsButton({
  commentsQty,
  setCommentsList,
  postId,
  isCommenting,
  setIsCommenting,
  token,
}) {
  async function handleComment() {
    if (!isCommenting) {
      try {
        const response = await api.readComments(postId, token);
        setCommentsList(response.data);
      } catch (e) {
        if ((response = [])) {
          return setIsCommenting(!isCommenting);
        }
        alert("Erro ao receber os comentários");
        setIsCommenting(!isCommenting);
      }
    }

    setIsCommenting(!isCommenting);
  }
  return (
    <CommentButtonContainer>
      <StyledCommentButton onClick={handleComment}></StyledCommentButton>
      <p>{commentsQty} comments</p>
    </CommentButtonContainer>
  );
}
