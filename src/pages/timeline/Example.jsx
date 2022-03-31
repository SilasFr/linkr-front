import React, { useContext, useEffect, useState } from "react";
import useInterval from "react-useinterval";
import {
  UpdateContainer,
  UpdateIcon,
} from "../../components/TimelineComponents";
import TimelineContext from "../../contexts/timelineContext";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";

export default function Update() {
  const { timeline, setTimeline } = useContext(TimelineContext);
  const { reload, setReload } = useContext(TimelineContext);
  const { userData } = useContext(UserContext);

  const [update, setUpdate] = useState(<div></div>);

  useEffect(() => {
    const promise = api.loadPosts(userData.token);
    promise.then((response) => {
      setTimeline(response.data);
    });
    promise.catch((error) => {
      alert(error.response);
    });
  }, []);

  async function checkTimeline() {
    try {
      const response = await api.loadPosts(userData.token);
      if (JSON.stringify(response.data) !== JSON.stringify(timeline)) {
        let sum = 0;
        response.data.forEach((post) => {
          let isNew = true;
          timeline.forEach((element) => {
            if (element.id === post.id) isNew = false;
          });
          if (isNew) sum++;
        });

        setUpdate(
          <UpdateContainer
            onClick={() => {
              setUpdate(<div></div>);
              setReload(!reload);
            }}
          >
            {sum > 1 ? (
              <p>{sum} new posts, load more!</p>
            ) : (
              <p>{sum} new post, load more!</p>
            )}
            <UpdateIcon />
          </UpdateContainer>
        );
      } else {
        console.log("sem update");
        setUpdate(<div></div>);
      }
    } catch (e) {
      console.log(e);
      alert("error!");
    }
    return;
  }

  useInterval(checkTimeline, 15000);

  return <>{update}</>;
}
