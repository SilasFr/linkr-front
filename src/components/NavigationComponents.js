import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

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

const SearchContainer = styled.div`
  width: 40%;
  position: relative;
`;

const SearchBar = styled(DebounceInput)`
  box-sizing: border-box;
  width: 100%;
  height: 45px;

  border-radius: 8px;

  background-color: #fff;

  color: #949494;
  position: relative;
  z-index: 2;
  padding-left: 17px;

  &::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400px;
    font-size: 19px;
    line-height: 23px;

    color: #c6c6c6;
  }
  &:focus {
    & + ul {
      display: flex;
    }
  }
`;

const SearchUsers = styled.ul`
  background-color: #e7e7e7;
  position: absolute;
  top: 37px;
  right: 0px;
  left: 0px;
  z-index: 1;

  display: none;
  flex-direction: column;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  li {
    height: 50px;
    list-style-type: none;
    padding-left: 17px;

    display: flex;
    align-items: center;
    justify-content: left;

    img {
      border-radius: 50%;
      width: 39px;
      height: 39px;
    }
    span {
      margin-left: 12px;

      font-family: "Lato";
      font-style: normal;
      font-weight: 400;
      font-size: 19px;
      line-height: 23px;
      color: #515151;
    }
  }

  &:first-of-type {
    padding-top: 8px;
  }
  &:hover {
    display: flex;
  }
`;

export {
  Navbar,
  Logo,
  UserInfo,
  ProfilePic,
  SearchContainer,
  SearchBar,
  SearchUsers,
};
