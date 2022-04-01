import styled from "styled-components"

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .follow {
    background: #1877F2;
    border-radius: 5px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }

  .unfollow{
    background: #FFFFFF;
    border-radius: 5px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #1877F2;
  }
`

const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 31px;
  left: 1066px;
  top: 141px;

  margin-top: 100px;
  margin-bottom: -95px;

  cursor: pointer;
`

export {Aside, FollowButton}