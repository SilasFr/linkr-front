import styled from "styled-components";

const ModalContainer = styled.div`
  max-width: 340px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 40px;

  max-width: 338px;
`;

const Dialog = styled.p`
  width: 100%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 41px;
  text-align: center;

  color: #ffffff;
`;

const Interface = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  gap: 25px;
`;

const DeleteButton = styled.button`
  width: 134px;
  height: 37px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;

  background: #1877f2;
  border-radius: 5px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  width: 134px;
  height: 37px;

  font-family: "Lato";
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #1877f2;

  background: #ffffff;
  border-radius: 5px;
  cursor: pointer;
`;

export { ModalContainer, Dialog, Interface, DeleteButton, CloseButton };
