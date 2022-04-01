import { useContext, useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import UserContext from "../../contexts/userContext";
import styled from "styled-components";
import { api } from "../../services/api";

export default function ComentForm({
  postId,
  setCommentsList,
  setCommentsQty,
  commentsQty,
}) {
  const { userData } = useContext(UserContext);
  const token = userData.token;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ comment: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (formData.comment === "") {
      alert("Campo vazio, preencha-o");
    }

    try {
      await api.postComment(postId, formData.comment, token);
      setFormData({ ...formData, comment: "" });
      const response = await api.readComments(postId, token);
      setCommentsList(response.data);
      setCommentsQty(parseInt(commentsQty) + 1);
    } catch {
      alert("Erro ao comentar");
    }
    setLoading(false);
    setFormData({ comment: "" });
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <UserPic src={userData.profilePic} />
      <StyledInput
        value={formData.comment}
        onChange={handleInputChange}
        name="comment"
        type="text"
        placeholder="write a comment..."
      />
      <SendButton type="submit" disabled={loading} />
    </Container>
  );
}

const Container = styled.form`
  width: 95%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  margin-top: 20px;
  margin-bottom: 15px;

  position: relative;
`;
const StyledInput = styled.input`
  display: flex;
  width: 100%;
  color: white;

  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: #252525;
  height: 40px;
  border-radius: 8px;
  ::placeholder {
    color: #575757;
  }
`;

const UserPic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 15px;
`;

const SendButton = styled(IoPaperPlaneOutline)`
  color: white;
  size: 15px;
  position: absolute;
  right: 3%;
  top: 14px;
`;
