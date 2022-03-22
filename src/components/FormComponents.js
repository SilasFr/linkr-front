import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  .right {
    width: 100%;
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
    width: 585px;
    display: flex;
    justify-content: center;

    background-color: #333333;
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
