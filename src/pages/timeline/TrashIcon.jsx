import { TrashCan } from "../../components/TimelineComponents";

export default function TrashIcon({ postId, dialog }) {
  function handleTrash() {
    dialog.onOpenModal();
    console.log(postId);
  }
  return (
    <TrashCan onClick={handleTrash}>
      <ion-icon name="trash"></ion-icon>
    </TrashCan>
  );
}
