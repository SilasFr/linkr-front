/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
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
  border: 0.5px dashed yellow;
  & h1 {
    margin: 0 auto 0 20px;
    font-size: 49px;
    line-height: 54px;
    font-family: "Passion One";
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #FFFFFF;
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px 0 auto;
  width: 88px;
  border: 1px dotted green;
  font-size: 25px;
  font-weight: 700;
  
  color: #FFFFFF;
`;

const UserAvatar = styled.div`
  display: flex;
  width: 53px;
  height: 53px;
  border-radius: 26.5px;
  background-color: blue;
`;

const MainFeed = styled.div`
width: 612px;
margin: 78px auto auto auto;
display: flex;
flex-direction: column;
`;

const NewPost = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border: 2px dotted orange;
`;

const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px dashed blue;
`;

const Post = styled.li`
  display: flex;
  width: 100%;
  height: 70px;
  border: 1px dashed yellow;
`;

export {
  MainContainer,
  Header,
  UserMenu,
  UserAvatar,
  MainFeed,
  NewPost,
  PostsList,
  Post,
};
