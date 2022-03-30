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
  const { userData } = useContext(UserContext);
  const [count, setCount] = useState(0);
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

  useEffect(() => {
    if (!count) return;
    setUpdate(
      <UpdateContainer>
        {count > 1 ? (
          <p>{count} new posts, load more!</p>
        ) : (
          <p>{count} new post, load more!</p>
        )}
        <UpdateIcon />
      </UpdateContainer>
    );
  }, [count]);

  async function checkTimeline() {
    try {
      const response = await api.loadPosts(userData.token);
      console.log("response: ", response.data);
      console.log("timeline: ", timeline);
      if (JSON.stringify(response.data) !== JSON.stringify(timeline)) {
        let sum = 0;
        console.log("diferente");
        response.data.forEach((post) => {
          console.log("id: ", post.id);
          if (!timeline.includes(post.id)) sum++;
        });
        console.log(sum);
        setCount(sum);
      } else {
        console.log("sem update");
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
