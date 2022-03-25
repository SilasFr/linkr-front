import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: #333333;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  padding: 8px;
  background-color: #151515;
  & h1 {
    margin: 0 auto 0 20px;
    font-size: 49px;
    line-height: 54px;
    font-family: "Passion One";
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px 0 auto;
  width: 88px;
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
  position: relative;
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
  position: absolute;
  z-index: 1;
  margin-top: 72px;
  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: #ffffff;
  }
  @media (max-width: 420px) {
    height: 43px;
  }
`;

const UserAvatar = styled.img`
  display: flex;
  width: 53px;
  height: 53px;
  border-radius: 26.5px;
  background-color: blue;
`;

const MainFeed = styled.div`
  width: 620px;
  margin: 78px auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h1 {
    margin: 0 auto 45px 0;
    font-size: 43px;
    line-height: 64px;
    font-family: "Oswald";
    font-weight: 700;
    color: #ffffff;
  }

  @media (max-width: 450px) {
    width: 100vw;
    margin-top: 0;
    h1 {
      margin-left: 17px;
      margin-bottom: 20px;
    }
  }
`;

const NewPost = styled.div`
  display: flex;
  width: 100%;
  height: 210px;
  margin: 0 0 30px 0;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 420px) {
    width: 100vw;
    height: 164px;
    padding: 10px 15px 12px 16px;
    border-radius: 0;
  }
`;

const PostUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  height: 150px;
  margin: 16px auto auto 16px;
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

const NewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  width: 90%;
  margin: 21px 28px 16px 15px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  & h2 {
    font-size: 20px;
    line-height: 24px;
    color: #707070;
  }
  & input {
    box-sizing: border-box;
    padding-left: 13px;
    background-color: #efefef;
    border-radius: 5px;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }

  @media (max-width: 420px) {
    width: 100vw;
    margin: 0;
    & h2 {
      font-size: 17px;
      line-height: 20px;
      text-align: center;
    }
  }
`;

const ButtonPublish = styled.button`
  align-self: end;

  width: 112px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1877f2;
  border-radius: 5px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  :disabled {
    background-color: #9f9f9f;
    pointer-events: none;
  }
`;

const NewPostUrl = styled.input`
  width: 100%;
  height: 30px;
  /* margin: 10px 0 8px 0; */
`;

const NewPostDescription = styled.input`
  width: 100%;
  height: 66px;
`;

const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export {
  MainContainer,
  Header,
  UserMenu,
  MenuLogout,
  UserAvatar,
  MainFeed,
  NewPost,
  PostUserInfo,
  NewPostForm,
  NewPostUrl,
  NewPostDescription,
  ButtonPublish,
  PostsList,
};
