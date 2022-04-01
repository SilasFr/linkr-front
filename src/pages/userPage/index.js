import { useEffect, useState } from "react";
import { useContext } from "react";
import FeedPosts from "../timeline/FeedPosts";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";
import { TimelineMessage } from "../../components/TimelineComponents";
import { ClipLoader } from "react-spinners";
import ModalComponent from "../timeline/modalDelete";
import TimelineContext from "../../contexts/timelineContext";

export default function UserPage({ userId, setUserName }) {
  const { userData } = useContext(UserContext);
  const { timeline, setTimeline } = useContext(TimelineContext);
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

      // ALTERAR ASSIM QUE POSSIVEL, FUNÇÃO ENGATILHADA
      setUserName(response.data[0].userName + `'s posts`);
      // ALTERAR ASSIM QUE POSSIVEL, FUNÇÃO ENGATILHADA
      setTimeline(response.data);
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
        <FeedPosts
          posts={posts}
          identifier={userData.id}
          type={"user"}
          dialog={modalControl}
          posts={posts}
        />
      )}
      <ModalComponent modalControl={modalControl} />
    </main>
  );
}
