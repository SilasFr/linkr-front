import React, { useContext, useEffect, useState } from "react";
import useInterval from "react-useinterval";
import TimelineContext from "../../contexts/timelineContext";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";

export default function Update() {
  const { timeline, setTimeline } = useContext(TimelineContext);
  const { userData } = useContext(UserContext);
  let [count, setCount] = useState(false);

  useEffect(
    async function () {
      try {
        const promise = await api.loadPosts(userData.token);
        console.log(promise.data);
      } catch (e) {
        console.log(e);
        alert("error!");
      }
    },
    [count]
  );

  const increaseCount = () => {
    setCount(!count);
  };

  useInterval(increaseCount, 15000);
  return <h1>{count}</h1>;
}
