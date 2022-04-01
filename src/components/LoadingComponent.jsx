import { ClipLoader } from "react-spinners";
import { TimelineMessage } from "./TimelineComponents";

export default function LoadingComponent() {
  return (
    <TimelineMessage>
      <p>Loading... </p>
      <ClipLoader color="white" />
    </TimelineMessage>
  );
}
