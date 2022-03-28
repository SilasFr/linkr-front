import { useContext } from "react";
import { Pen } from "../../components/TimelineComponents";
import TimelineContext from "../../contexts/timelineContext";

import icon from "@icon/dashicons/icons/edit.svg";

export default function PenIcon({ postId, dialog, editing, setEditing }) {
  function handleEdit() {
    setEditing(!editing);
  }
  return (
    <Pen onClick={handleEdit}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="#ffffff"
      >
        <path fill="none" d="M0 0h20v20H0z" />
        <path d="M13.89 3.39l2.71 2.72c.46.46.42 1.24.03 1.64l-8.01 8.02-5.56 1.16 1.16-5.58s7.6-7.63 7.99-8.03c.39-.39 1.22-.39 1.68.07zm-2.73 2.79l-5.59 5.61 1.11 1.11 5.54-5.65zm-2.97 8.23l5.58-5.6-1.07-1.08-5.59 5.6z" />
      </svg>
    </Pen>
  );
}
