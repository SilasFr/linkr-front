import {
  Container,
  Header,
  MenuLogout
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { useContext, useState } from "react";

export default function Timeline() {
  const { userData } = useContext(UserContext);
  const [ showMenu, setShowMenu ] = useState(false)

  return (
    <Container>
      <Header>
        <h1>linkr</h1>
        <div className="profile-pic-menu">
          <ion-icon name={showMenu ? "chevron-up" : "chevron-down"} onClick={() => setShowMenu(currentShowMenu => !currentShowMenu)}></ion-icon>
          <img src={userData.profilePic} alt="profile-pic" className="profile-pic" onClick={() => setShowMenu(currentShowMenu => !currentShowMenu)}/>
        </div>
      </Header>
        { showMenu ? 
          <MenuLogout>
            <p>Logout</p>
          </MenuLogout> 
        : null }

    </Container>
  );
}