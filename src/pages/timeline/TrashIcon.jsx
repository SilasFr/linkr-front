import { TrashCan } from "../../components/TimelineComponents";

export default function TrashIcon() {
  function handleDelete() {
    try {
      console.log("click to delete");
    } catch (e) {
      alert(e.response.data);
    }
  }
  return (
    <TrashCan>
      <ion-icon name="trash"></ion-icon>
    </TrashCan>
  );
}
