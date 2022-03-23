import {
  Container,
  Header,
  MenuLogout
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export default function Timeline() {
  const { userData, setUserData } = useContext(UserContext);
  const [ showMenu, setShowMenu ] = useState(false);
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    const token = {
      token: userData.token
    }

    try {
      await api.logout(token);

      setUserData({
        name: "",
        token: "",
        profilePic: "",
      });

      navigate("/");
    } catch (e) {
      alert("Sua sessão já foi expirada expirada.");
      navigate("/")
    }
  }

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
              onClick={handleLogout}
            >
              <p>Logout</p>
            </Link>
          </MenuLogout> 
        : null }

    </Container>
  );
}