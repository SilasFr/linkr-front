import { useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  PostsList,
  TimelineMessage,
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import IndividualPost from "../../components/IndividualPost/index";
import TimelineContext from "../../contexts/timelineContext";
import LoadingComponent from "../../components/LoadingComponent";
import { api } from "../../services/api";

export default function FeedPosts({ identifier, type, dialog }) {
  const { userData } = useContext(UserContext);
  const { timeline, setTimeline } = useContext(TimelineContext);
  const [hasMore, setHasMore] = useState(true);
  const [loadNumber, setLoadNumber] = useState(1);
  if (typeof timeline === "string") {
    return (
      <TimelineMessage>
        <p>{timeline}</p>
      </TimelineMessage>
    );
  }

  async function loadMorePosts() {
    let response;
    switch (type) {
      case "main":
        response = await api.loadPosts(userData.token, loadNumber);
      case "topic":
        response = await api.loadPostsByHashtag(
          userData.token,
          identifier,
          loadNumber
        );
      case "user":
        response = await api.loadPostsByUserId(
          userData.token,
          identifier,
          loadNumber
        );
    }

    if (typeof response.data === "string") {
      setHasMore(false);
      return;
    }
    let aux = [...timeline];
    response?.data.map((elem) => {
      aux.push(elem);
    });
    setTimeline(aux);

    setLoadNumber(loadNumber + 1);
  }

  return (
    <PostsList>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMorePosts}
        hasMore={hasMore}
        loader={<LoadingComponent />}
      >
        {timeline.map((post) => {
          let renderTrashIcon = false;
          let renderPenIcon = false;
          if (userData.id === post.author) {
            renderTrashIcon = true;
            renderPenIcon = true;
          }
          return (
            <IndividualPost
              key={timeline.indexOf(post)}
              post={post}
              dialog={dialog}
              renderPenIcon={renderPenIcon}
              renderTrashIcon={renderTrashIcon}
            />
          );
        })}
      </InfiniteScroll>
    </PostsList>
  );
}
