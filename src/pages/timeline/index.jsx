import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { TimelineMessage } from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import TimelineContext from "../../contexts/timelineContext";
import { api } from "../../services/api";
import FeedPosts from "./FeedPosts";
import ModalComponent from "./modal";

export default function Timeline({ reload, setReload }) {
  const { userData } = useContext(UserContext);
  const { timeline, setTimeline } = useContext(TimelineContext);
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
  async function updatePosts() {
    try {
      setLoading(true);
      const response = await api.loadPosts(userData.token);
      setTimeline(response.data);
    } catch (e) {
      alert(
        '"An error occured while trying to fetch the posts, please refresh the page"'
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    updatePosts();
  }, [reload]);
  console.log(timeline);
  return (
    <main>
      {loading ? (
        <TimelineMessage>
          <p>Loading... </p>
          <ClipLoader color="white" />
        </TimelineMessage>
      ) : (
        <FeedPosts dialog={modalControl} />
      )}
      <ModalComponent modalControl={modalControl} reload={setReload} />
    </main>
  );
}
