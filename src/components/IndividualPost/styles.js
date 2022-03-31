import styled from "styled-components";
import { AiOutlineComment } from "react-icons/ai";

const PostCard = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  height: 276px;
  margin: 0 0 30px 0;
  padding-top: 10px;
  background-color: #171717;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  @media (max-width: 450px) {
    width: 100%;
    border-radius: 0;
    height: 232px;
  }
`;
const PostUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 150px;
  margin: 16px auto auto 16px;
  & img {
    width: 50px;
    min-height: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
const CommentButtonContainer = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 3px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;

    color: #ffffff;
  }
`;

const StyledCommentButton = styled(AiOutlineComment)`
  color: white;
  font-size: 20px;
`;

const CommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;

  background-color: #1e1e1e;
  border-radius: 0px 0px 16px 16px;

  position: absolute;
  top: 100%;

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  ::before {
    content: "";
    position: absolute;

    background-color: transparent;
    top: -32px;
    height: 32px;
    width: 100%;
    border-radius: 0px 0px 16px 16px;
    box-shadow: 0 16px 0 0 #1e1e1e;
  }
`;
const CommentList = styled.ul`
  width: 95%;

  /* position: absolute; */
  z-index: 2;

  list-style-type: none;
`;
const IndividualComment = styled.li`
  min-height: 70px;
  height: auto;

  display: flex;

  img {
    width: 40px;
    min-height: 40px;
    height: 40px;
    border-radius: 50%;
    margin-top: 13px;
  }

  div {
    min-height: 40px;
    width: 100%;
    padding-left: 20px;
    padding-top: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    justify-content: flex-start;

    h1 {
      width: 100%;
      margin: 0;

      display: flex;

      font-family: "Lato";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      color: #f3f3f3;
      p {
        margin-left: 10px;
        color: #565656;
      }
    }
    span {
      margin-top: 3px;

      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #acacac;
    }
  }
  border-bottom: 1px solid #353535;
`;

export {
  PostCard,
  PostUserInfo,
  CommentButtonContainer,
  StyledCommentButton,
  CommentsContainer,
  CommentList,
  IndividualComment,
};
