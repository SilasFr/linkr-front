import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

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

export { Container, Feed, Form, ProfilePic };
