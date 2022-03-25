import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;

  @media (max-width: 450px) {
    width: 100%;
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
  width: 100%;

  margin-top: 30px;

  @media (max-width: 450px) {
    width: 100vw;
  }
`;

const PostCard = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  height: 276px;
  margin: 0 0 30px 0;
  background-color: #171717;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 450px) {
    width: 100%;
    border-radius: 0;
    height: 232px;
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
  }
  & h4 {
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    color: #b7b7b7;
  }
`;

const PostUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 150px;
  margin: 16px auto auto 16px;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const LinkPreview = styled.div`
  width: 100%;
  height: 155px;
  margin-top: 20px;
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

export {
  Container,
  Feed,
  PostsList,
  PostCard,
  PostContent,
  PostUserInfo,
  LinkPreview,
  LinkData,
  TimelineMessage,
  Header,
  MenuLogout,
};
