import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  background-color: #333333;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

const Header = styled.div`
    display: flex;
    width: 100vw;
    height: 72px;

    justify-content: space-between;
    align-items: center;

    padding: 0 15px;

    background-color: #151515;
    .profile-pic-menu {
        display: flex;
        align-items: center;

        ion-icon {
            font-size: 24px;

            color: #FFFFFF;

            cursor: pointer;
        }

        .profile-pic {
            width: 53px;
            height: 53px;
            
            border-radius: 50%;
            
            margin-left: 15px;

            cursor: pointer;
        }
    }

    h1 {
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }

    @media (max-width: 420px) {
    width: 100%;
    flex-direction: row;
    }
`

const MenuLogout = styled.div`
    display: flex;
    width: 130px;
    height: 45px;

    border-bottom-left-radius: 25px;

    align-items: center;
    justify-content: center;

    align-self: flex-end;

    background-color: #171717;

    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }

    @media (max-width: 420px) {
    height: 43px;
    }
`

export { Container, Header, MenuLogout };