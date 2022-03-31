import { useContext, useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import UserContext from "../contexts/userContext";
import styled from "styled-components";
import { api } from "../services/api";

export default function ComentForm({ postId }) {
  const { userData } = useContext(UserContext);
  const token = userData.token;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (formData.comment === "") {
      alert("Campo vazio, preencha-o");
    }

    try {
      await api.postComment(postId, formData.comment, token);
    } catch {
      alert("Erro ao comentar");
    }
  }

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <Container onSubmit={handleSubmit}>
      <UserPic src={userData.profilePic} />
      <Fixed>
        <StyledInput
          value={formData.comment}
          onChange={handleInputChange}
          name="comment"
          type="text"
          placeholder="write a comment..."
        />
        <SendButton type="submit" disabled={loading} />
      </Fixed>
    </Container>
  );
}

const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
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
  right: 0px;
  top: 14px;
`;

const Fixed = styled.div`
  width: 80%;
  position: relative;
`;
