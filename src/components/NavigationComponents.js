import styled from "styled-components";

const Navbar = styled.div`
  width: 100%;
  height: 72px;
  padding: 8px;
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #151515;
  color: #fff;
`;

const Logo = styled.div`
  font-family: "Passion One", cursive;
  font-size: 49px;
  line-height: 54px;
`;

const UserInfo = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  ion-icon {
    font-size: 25px;
  }
`;

const ProfilePic = styled.div`
  width: 53px;
  height: 53px;
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

export { Navbar, Logo, UserInfo, ProfilePic };
