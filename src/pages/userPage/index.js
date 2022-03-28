import { useEffect, useState } from "react";
import { useContext } from "react";
import FeedPosts from "../timeline/FeedPosts";
import UserContext from "../../contexts/userContext";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import Nav from "../timeline/navbar";
import { TimelineMessage } from "../../components/TimelineComponents";
import { MainContainer, MainFeed } from "../../components/HomeComponents";
import { ClipLoader } from "react-spinners";
import ModalComponent from "../timeline/modal";
import HeaderComponent from "../../components/Header";

export default function UserPage() {
  const userId = useParams().id;
  const { userData } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const modalControl = {
    open,
    setOpen,
    onOpenModal,
    onCloseModal,
  };

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await api.loadPostsByUserId(userData.token, userId);
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
      <HeaderComponent />
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
            <FeedPosts posts={posts} dialog={modalControl} />
          )}
          <ModalComponent modalControl={modalControl} />
        </main>
      </MainFeed>
    </MainContainer>
  );
}
