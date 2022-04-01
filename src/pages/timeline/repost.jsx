import { useContext } from "react";
import { RepostIcon } from "../../components/TimelineComponents";
import TimelineContext from "../../contexts/timelineContext";
import ModalRepost from "./modalRepost";

export default function repost({ reposts, postId }) {
  const { repostModal, setRepostModal } = useContext(TimelineContext);

  function toggleModal() {
    setRepostModal(!repostModal);
  }
  return (
    <div onClick={toggleModal}>
      <RepostIcon />
      <p>{reposts} re-posts</p>
      <ModalRepost postId={postId} />
    </div>
  );
}
