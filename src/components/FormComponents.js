import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  .right {
    width: 65%;
    display: flex;

    background-color: #151515;
    color: #fff;
    .banner {
      width: 442px;

      margin-top: 300px;
      margin-left: 145px;

      h1 {
        font-family: "Passion One";
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
      }
      h2 {
        font-family: "Oswald";
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
      }
    }
  }

  .left {
    width: 35%;
    display: flex;
    justify-content: center;

    background-color: #333333;
  }
  @media (max-width: 420px) {
    width: 100%;
    flex-direction: column;

    .right {
      width: 100%;
      height: 200px;
      align-items: center;
      justify-content: center;
      .banner {
        width: 237px;
        height: 138px;
        margin: 10px 0 40px 0;
        h1 {
          font-size: 76px;
          line-height: 84px;
          text-align: center;
        }
        h2 {
          font-size: 23px;
          line-height: 34px;
          text-align: center;
        }
      }
    }

    .left {
      width: 100%;
      height: 100vh;
    }
  }
`;

const Form = styled.form`
  width: 80%;
  margin-top: 260px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;
  @media (max-width: 420px) {
    margin-top: 40px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 65px;
  background: #ffffff;
  border-radius: 6px;
  padding-left: 10px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;

  ::placeholder {
    color: #9f9f9f;
  }

  @media (max-width: 420px) {
    height: 55px;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 65px;

  background: #1877f2;
  border-radius: 6px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 40px;

  color: #ffffff;

  @media (max-width: 420px) {
    height: 55px;
  }
`;

const StyledLink = styled(Link)`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-decoration: underline;
  color: #ffffff;
`;

export { Container, Form, Input, Button, StyledLink };
