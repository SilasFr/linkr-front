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
  font-size: 25px;
  font-weight: 700;
  color: #FFFFFF;
`;

const UserAvatar = styled.img`
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
  & h1 {
    margin: 0 auto 45px 0;
    font-size: 43px;
    line-height: 64px;
    font-family: 'Oswald';
    font-weight: 700;
    color: #FFFFFF;
  }
`;

const NewPost = styled.div`
  display: flex;
  width: 100%;
  height: 210px;
  margin: 0 0 30px 0;
  background-color: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

const PostUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  height: 150px;
  margin: 16px auto auto 16px;
  & img {
    border-radius: 50%;
  }
`;

const NewPostForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 503px;
  margin: 21px 28px 16px 0;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  & h2 {
    font-size: 20px;
    line-height: 24px;
    color: #707070;
  }
  & input {
    width: 100%;
    padding-left: 13px;
    background-color: #EFEFEF;
    border-radius: 5px;
    font-size: 15px;
    line-height: 18px;
    color: #949494;
  }
`;

const ButtonPublish = styled.button`
  width: 112px;
  height: 32px;
  margin: 5px 0 auto auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1877F2;
  border-radius: 5px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;

const NewPostUrl = styled.input`
  height: 30px;
  margin: 10px 0 8px 0;
`;

const NewPostDescription = styled.input`
  height: 66px;
`;

const PostsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  & h3 {
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
  }
  & h4 {
    font-size: 17px;
    line-height: 21px;
    color: #B7B7B7;
  }
`;

const LinkPreview = styled.div`
  width: 100%;
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & img {
    width: 153px;
  }
`;

const LinkData = styled.div`
  & h5 {
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
  }
  & p {
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
  }
  & h6 {
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
  }
`;

export {
  MainContainer,
  Header, UserMenu, UserAvatar,
  MainFeed,
  NewPost,
  PostUserInfo,
  NewPostForm,
  NewPostUrl,
  NewPostDescription,
  ButtonPublish,
  PostsList,
  PostCard,
  PostContent,
  LinkPreview,
  LinkData,
};
