import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/userContext";
import { Header, UserMenu, UserAvatar, MenuLogout } from "./HomeComponents";
import { api } from "../services/api";
import {
  SearchBar,
  SearchContainer,
  SearchUsers,
} from "../components/NavigationComponents";

export default function HeaderComponent() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { userData } = useContext(UserContext);
  const [searchedUsers, setSearchedUsers] = useState([]);

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

  async function searchTo(event) {
    try {
      if (event.target.value === "") {
        setSearchedUsers([]);
        return;
      }

      const result = await api.searchUser(userData.token, event.target.value);
      setSearchedUsers(result.data);
    } catch (e) {
      console.log(e);
      alert("Houve um erro ao pesquisar, tente novamente");
      setSearchedUsers([]);
    }
  }

  return (
    <>
      <Header>
        <Link to="/timeline">linkr</Link>

        <SearchContainer>
          <SearchBar
            placeholder="Search for people"
            minLength={3}
            debounceTimeout={300}
            onChange={(event) => searchTo(event)}
          ></SearchBar>
          <SearchUsers>
            {searchedUsers.map((item) => {
              return (
                <Link to={`/user/${item.id}`} key={searchedUsers.indexOf(item)}>
                  <li>
                    <img src={item.profilePic} />
                    <span>{item.name}</span>
                  </li>
                </Link>
              );
            })}
          </SearchUsers>
        </SearchContainer>

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
