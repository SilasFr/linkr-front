import { useEffect, useState } from "react";
import { useContext } from "react";
import FeedPosts from "../timeline/FeedPosts";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";
import { TimelineMessage } from "../../components/TimelineComponents";
import { ClipLoader } from "react-spinners";
import ModalComponent from "../timeline/modal";
import styled from "styled-components";

export default function UserPage({ userId, setUserName }) {
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
      setUserName(response.data.author + `'s posts`);
      setPosts(response.data.posts);
      setLoading(false);
    } catch {
      alert(
        '"An error occured while trying to fetch the posts, please refresh the page"'
      );
    }
  }, []);

  return (
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
  );
}
