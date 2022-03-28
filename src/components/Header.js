import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/userContext";
import { Header, UserMenu, UserAvatar, MenuLogout } from "./HomeComponents";
import { api } from "../services/api";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { userData } = useContext(UserContext);
  async function handleLogout(e) {
    e.preventDefault();

    const token = {
      token: userData.token,
    };

    try {
      const result = await api.logout(token);
      setUserData({
        name: "",
        token: "",
        profilePic: "",
      });
      navigate("/");
    } catch {
      alert("Sua sessão já foi expirada.");
      navigate("/");
    }
  }
  return (
    <>
      <Header>
        <h1>linkr</h1>

        <UserMenu>
          <ion-icon
            name={showMenu ? "chevron-up" : "chevron-down"}
            onClick={() => setShowMenu((currentShowMenu) => !currentShowMenu)}
          ></ion-icon>
          <UserAvatar src={userData.profilePic} />
        </UserMenu>
      </Header>
      {showMenu ? (
        <MenuLogout>
          <Link to={"/"} onClick={handleLogout}>
            <p>Logout</p>
          </Link>
        </MenuLogout>
      ) : null}
    </>
  );
}
