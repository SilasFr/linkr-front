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
  const [count, setCount] = useState(1);
  const [paragraph, setParagraph] = useState(
    <p>{count} new post, load more!</p>
  );
  const [update, setUpdate] = useState(
    <UpdateContainer>
      {paragraph}
      <UpdateIcon />
    </UpdateContainer>
  );

  const updateTimelineElement = (
    <UpdateContainer>
      <UpdateIcon />
    </UpdateContainer>
  );

  //   useEffect(async function () {}, [count]);

  async function checkTimeline() {
    try {
      const response = await api.loadPosts(userData.token);
      console.log(response.data);
      if (response.data !== timeline) {
        setUpdate(updateTimelineElement);
      }
    } catch (e) {
      console.log(e);
      alert("error!");
    }
    return;
  }

  useInterval(checkTimeline, 15000);
  return <div>{update}</div>;
}
