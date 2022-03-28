import { useContext, useEffect, useState } from "react";
import { Like } from "../../components/TimelineComponents";
import ReactTooltip from "react-tooltip";
import { api } from "../../services/api";
import UserContext from "../../contexts/userContext.js";

export default function LikeIcon({ id, postInfo }) {
  let { likesList, likedByUser } = postInfo;
  const { userData } = useContext(UserContext);
  const [tooltipMessage, SetTooltipMessage] = useState("");
  const token = userData.token;

  const [liked, setLiked] = useState(likedByUser);
  console.log(liked);
  if (likesList[0] === null) likesList = [];

  useEffect(async () => {
    let lista = await api.getLikesByPostId(id, token);

    if (likesList.length > 2) {
      likedByUser
        ? SetTooltipMessage(
            `Você, ${lista[1].name} e outras ${
              likesList.length - 2
            } pessoas curtiram esse post!`
          )
        : SetTooltipMessage(
            `${lista[0].name}, ${lista[1].name} e outras ${
              likesList.length - 2
            } pessoas curtiram esse post!`
          );
    } else if (likesList.length === 2) {
      likedByUser
        ? SetTooltipMessage(`Você e ${lista[1].name} curtiram esse post`)
        : SetTooltipMessage(
            `${lista[0].name} e ${lista[1].name} curtiram esse post`
          );
    } else if (likesList.length === 1) {
      likedByUser
        ? SetTooltipMessage(`Você curtiu esse post`)
        : SetTooltipMessage(`${lista[0].name} curtiu esse post`);
    } else if (likesList.length === 0) {
      SetTooltipMessage(`Ninguem curtiu esse post ainda`);
    }
  }, []);

  function toggleLike() {
    setLiked(!liked);
  }

  function showLikes() {
    ReactTooltip.show();
  }

  function renderLike() {
    return (
      <>
        <ion-icon
          onClick={toggleLike}
          onMouseEnter={showLikes}
          name={liked ? "heart" : "heart-outline"}
          className=""
          data-tip
          data-for={`tooltip${id}`}
        ></ion-icon>
        <ReactTooltip
          id={`tooltip${id}`}
          place="bottom"
          type="light"
          delayHide={500}
        >
          {tooltipMessage}
        </ReactTooltip>
      </>
    );
  }
  return <Like>{renderLike()}</Like>;
}
