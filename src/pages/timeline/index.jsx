import {
  Container,
  Header,
  MenuLogout
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Timeline() {
  const { userData, setUserData } = useContext(UserContext);
  const [ showMenu, setShowMenu ] = useState(false);

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
            <Link 
              to={"/"} 
              onClick={() => setUserData({
                name: "",
                token: "",
                profilePic: "",
              })}
            >
              <p>Logout</p>
            </Link>
          </MenuLogout> 
        : null }

    </Container>
  );
}