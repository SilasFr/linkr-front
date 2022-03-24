import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333333;
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

        &-title {
          /* font-size: 20px;
          line-height: 24px; */
        }
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

const ProfilePic = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  border-radius: 50%;

  background-color: #fff;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;

  margin-top: 10px;

  input {
    width: 503px;
    height: 30px;
    padding: 6px;

    font-family: "Lato";
    font-size: 15px;
    font-style: normal;
    border: none;
    background: #efefef;
    border-radius: 5px;

    color: #333333;

    ::placeholder {
      color: #949494;
      font-weight: 300;
    }
  }

  input.description {
    height: 66px;
  }

  button {
    width: 112px;
    height: 31px;
    align-self: end;

    font-size: 14px;
    font-weight: 700;

    background: #1877f2;
    border-radius: 5px;
    border: none;
    color: #fff;
  }
`;

const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 30px;
`;

const PostCard = styled.li`
  display: flex;
  width: 100%;
  height: 276px;
  margin: 0 0 30px 0;
  background-color: #171717;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 503px;
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
    min-width: 153px;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0px 11px 11px 0px;
  }
  :hover {
    cursor: pointer;
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
  }
  & p {
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;
  }
  & h6 {
    margin-top: 5px;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    color: #cecece;
  }
`;

const TimelineMessage = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;

  /* background-color: #fff; */
  p {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 64px;
    color: #fff;
  }
`;

export {
  Container,
  Feed,
  Form,
  ProfilePic,
  PostsList,
  PostCard,
  PostContent,
  PostUserInfo,
  LinkPreview,
  LinkData,
  TimelineMessage,
};
