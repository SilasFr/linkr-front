import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoIosHeart, IoIosSync, IoIosRepeat } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const Feed = styled.div`
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  color: #fff;
  header {
    p {
      font-family: "Oswald";
      font-style: normal;
      font-weight: 700;
      font-size: 43px;
      line-height: 64px;
    }
  }
  main {
    width: 611px;
    height: 100%;
    margin-top: 43px;
    .new-post {
      width: 100%;
      height: 200px;
      display: flex;
      padding: 15px;
      color: #000;
      background-color: #fff;
      border-radius: 16px;
      .profile-pic {
        height: 60px;
        width: 60px;
      }
      .post-info {
        margin: 5px 0 0 18px;
        display: flex;
        flex-direction: column;
        font-family: "Lato";
        font-size: 20px;
        color: #707070;
      }
    }
    .posts {
      width: 100%;
      min-height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 611px;
  margin: 30px 0;
  @media (max-width: 450px) {
    width: 100vw;
  }
`;

const PostCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin: 0 0 30px 0;
  padding-top: 10px;
  background-color: #171717;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  @media (max-width: 450px) {
    width: 100%;
    border-radius: 0;
    min-height: 232px;
    & > div {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 237px;
  margin: 21px 28px 16px 0;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  & h3 {
    font-size: 19px;
    line-height: 23px;
    color: #ffffff;
    cursor: pointer;
  }
  & h4 {
    height: 40px;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
  }
  input {
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 7px;

    padding: 5px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #4c4c4c;
  }
`;

const LinkPreview = styled.div`
  width: 100%;
  height: 155px;
  margin: 5px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  & img {
    min-width: 35%;
    height: 100%;
    border-radius: 0px 11px 11px 0px;
  }
  :hover {
    cursor: pointer;
  }
  @media (max-width: 450px) {
    height: 115px;
  }
`;

const LinkData = styled.div`
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  & h5 {
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    @media (max-width: 450px) {
      font-size: 11px;
      line-height: 13px;
    }
  }
  & p {
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
    @media (max-width: 450px) {
      font-size: 9px;
      line-height: 11px;
    }
  }
  & h6 {
    margin-top: 5px;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    color: #cecece;
    @media (max-width: 450px) {
      font-size: 9px;
      line-height: 11px;
    }
  }
`;

const TimelineMessage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 64px;
    color: #fff;
  }
  @media (max-width: 450px) {
    width: 100vw;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100vw;
  height: 72px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background-color: #151515;
  .profile-pic-menu {
    display: flex;
    align-items: center;
    ion-icon {
      font-size: 24px;
      color: #ffffff;
      cursor: pointer;
    }
    .profile-pic {
      width: 53px;
      height: 53px;
      border-radius: 50%;
      margin-left: 15px;
      cursor: pointer;
    }
  }
  h1 {
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
  @media (max-width: 450px) {
    width: 100%;
    flex-direction: row;
  }
`;

const MenuLogout = styled.div`
  display: flex;
  width: 130px;
  height: 45px;
  border-bottom-left-radius: 25px;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background-color: #171717;
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
  @media (max-width: 450px) {
    height: 43px;
  }
`;

const StyledHashtag = styled(Link)`
  font-weight: 700;
`;

const TrashCan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 5px;
  width: 40px;
  height: 40px;
  z-index: 1;
  ion-icon {
    color: #fff;
    font-size: 1.2rem;
    @media (max-width: 450px) {
      font-size: 1rem;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;
const Pen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 45px;

  width: 40px;
  height: 40px;
  z-index: 1;
  svg {
    width: 32px;
    height: 32px;
    @media (max-width: 450px) {
      width: 24px;
      height: 24px;
    }
  }

  :hover {
    cursor: pointer;
  }
`;
const Like = styled.div`
  color: #fff;
  font-size: 22px;

  ion-icon.liked {
    font-size: 50px;
    color: red;
  }
  :hover {
    cursor: pointer;
  }
`;

const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const StyledLike = styled(IoIosHeart)`
  color: red;
`;

const LikesNumber = styled.p`
  font-size: 11px;
  color: white;
`;

const UpdateContainer = styled.div`
  width: 100%;
  height: 61px;
  padding: 0 20px;
  background-color: #1877f2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  p {
    color: #fff;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 450px) {
    width: 100vw;
  }
`;

const UpdateIcon = styled(IoIosSync)`
  font-size: 20px;
  color: #fff;
`;

const RepostIcon = styled(IoIosRepeat)`
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const CommentsIcon = styled(IoChatbubbleEllipsesOutline)`
  color: #fff;
  font-size: 22px;
  cursor: pointer;
`;

const InteractionMenu = styled.div`
  margin-top: 30px;
  max-width: 70px;
  word-break: keep-all;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: #ffffff;
`;

const RepostedByIcon = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  gap: 10px;

  padding-left: 20px;
  margin-top: 20px;

  background: #1e1e1e;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;

  color: #ffffff;
`;

const ContentSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CommentSection = styled.div`
  width: 100%;
  display: flex;
  padding: 3px 15px;
`;

export {
  Container,
  Feed,
  PostsList,
  PostContent,
  LinkPreview,
  LinkData,
  TimelineMessage,
  Header,
  MenuLogout,
  StyledHashtag,
  TrashCan,
  Pen,
  Like,
  StyledLike,
  UpdateContainer,
  UpdateIcon,
  RepostIcon,
  CommentsIcon,
  InteractionMenu,
  RepostedByIcon,
  ContentSection,
  CommentSection,
  LikeContainer,
  LikesNumber,
};
