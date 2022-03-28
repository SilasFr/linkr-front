import { useContext, useEffect, useState } from "react";
import { Like, StyledLike } from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";

export default function LikeIcon({ id }) {
  const { userData } = useContext(UserContext);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    try {
      if (liked) {
        const promise = api.likePost(id, userData.token);
        promise.then((response) => console.log(response.data));
        promise.catch((error) => console.log("error> ", error.response));
      } else {
        const promise = api.dislikePost(id, userData.token);
        promise.then((response) => console.log(response.data));
        promise.catch((error) => console.log(error.response));
      }
    } catch (e) {
      alert("Erro! Não foi possível dar like no post.");
    }
  }, [liked]);
  function toggleLike() {
    setLiked(!liked);
  }
  function renderLike() {
    if (liked) {
      return <StyledLike onClick={toggleLike} />;
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
