import { useContext, useEffect, useState } from "react";
import { Like, StyledLike } from "../../components/TimelineComponents";
import ReactTooltip from "react-tooltip";
import { api } from "../../services/api";
import UserContext from "../../contexts/userContext.js";

export default function LikeIcon({ id, postInfo }) {
  let { likesList, likedByUser } = postInfo;
  console.log(likesList);
  const { userData } = useContext(UserContext);
  const [tooltipMessage, SetTooltipMessage] = useState("");
  const token = userData.token;

  const [liked, setLiked] = useState(likedByUser);
  if (likesList[0] === null) likesList = [];

  useEffect(async () => {
    let nameList = await api.getLikesByPostId(id, token);

    if (likesList.length > 2) {
      likedByUser
        ? SetTooltipMessage(
            `Você, ${nameList[1].name} e outras ${
              likesList.length - 2
            } pessoas curtiram esse post!`
          )
        : SetTooltipMessage(
            `${nameList[0].name}, ${nameList[1].name} e outras ${
              likesList.length - 2
            } pessoas curtiram esse post!`
          );
    } else if (likesList.length === 2) {
      likedByUser
        ? SetTooltipMessage(`Você e ${nameList[1].name} curtiram esse post`)
        : SetTooltipMessage(
            `${nameList[0].name} e ${nameList[1].name} curtiram esse post`
          );
    } else if (likesList.length === 1) {
      likedByUser
        ? SetTooltipMessage(`Você curtiu esse post`)
        : SetTooltipMessage(`${nameList[0].name} curtiu esse post`);
    } else if (likesList.length === 0) {
      SetTooltipMessage(`Ninguem curtiu esse post ainda`);
    }
    ReactTooltip.rebuild();
  }, [liked]);

  function toggleLike() {
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
    setLiked(!liked);
  }

  function renderLike() {
    if (liked) {
      return (
        <>
          <StyledLike onClick={toggleLike} data-tip data-for={`tooltip${id}`} />
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
    } else {
      return (
        <>
          <ion-icon
            data-tip
            data-for={`tooltip${id}`}
            onClick={toggleLike}
            name="heart-outline"
            className=""
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
  }
  return <Like>{renderLike()}</Like>;
}
