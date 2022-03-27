import { useEffect, useState } from "react";
import { useContext } from "react";
import FeedPosts from "../timeline/FeedPosts";
import UserContext from "../../contexts/userContext";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import Nav from "../timeline/navbar";
import { TimelineMessage } from "../../components/TimelineComponents";
import {
  MainContainer,
  Header,
  UserMenu,
  MenuLogout,
  UserAvatar,
  MainFeed,
} from "../../components/HomeComponents";
import { ClipLoader } from "react-spinners";

export default function UserPage() {
  const userId = useParams().id;
  const { userData } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await api.loadPostsByUserId(userData.token, userId);
      console.log("userData: ", userData.profilePic);
      setPosts(response.data);
      setLoading(false);
    } catch {
      alert(
        '"An error occured while trying to fetch the posts, please refresh the page"'
      );
    }
  }, []);

  return (
    <MainContainer>
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
      <>
        {/*         {showMenu ? (
          <MenuLogout>
            <Link to={"/"} onClick={handleLogout}>
              <p>Logout</p>
            </Link>
          </MenuLogout>
        ) : null} */}
      </>
      <MainFeed>
        <h1>{userData.name}</h1>
        <Nav />
        <main>
          {loading ? (
            <TimelineMessage>
              <p>Loading... </p>
              <ClipLoader color="white" />
            </TimelineMessage>
          ) : (
            <FeedPosts posts={posts} />
          )}
        </main>
      </MainFeed>
    </MainContainer>
  );
}
