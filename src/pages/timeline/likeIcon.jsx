import { useState } from "react";
import { Like } from "../../components/TimelineComponents";

export default function LikeIcon({ id }) {
  const [liked, setLiked] = useState(false);
  console.log("id: ", id);
  function toggleLike() {
    setLiked(!liked);
  }
  function renderLike() {
    if (liked) {
      return (
        <ion-icon
          onClick={toggleLike}
          name="heart"
          className="liked"
        ></ion-icon>
      );
    } else
      return (
        <ion-icon
          onClick={toggleLike}
          name="heart-outline"
          className=""
        ></ion-icon>
      );
  }
  return <Like>{renderLike()}</Like>;
}
