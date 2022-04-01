import { useContext } from "react";
import { TrashCan } from "../../components/TimelineComponents";
import TimelineContext from "../../contexts/timelineContext";

export default function TrashIcon({ postId, dialog }) {
  const { setDeletePost } = useContext(TimelineContext);
  function handleTrash() {
    dialog.onOpenModal();
    setDeletePost(postId);
  }
  return (
    <TrashCan onClick={handleTrash}>
      <ion-icon name="trash"></ion-icon>
    </TrashCan>
  );
}
