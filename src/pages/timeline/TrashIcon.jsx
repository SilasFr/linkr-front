import { TrashCan } from "../../components/TimelineComponents";
import { useState } from "react";

export default function TrashIcon({ postId, dialog }) {
  async function handleDelete() {
    try {
      console.log("delete", postId);
      dialog(!dialog);
    } catch (e) {
      alert("Não foi possível excluir o post");
    }
  }
  return (
    <TrashCan onClick={handleDelete}>
      <ion-icon name="trash"></ion-icon>
    </TrashCan>
  );
}
