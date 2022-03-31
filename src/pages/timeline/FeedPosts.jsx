import { useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  PostsList,
  TimelineMessage,
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import IndividualPost from "../../components/IndividualPost";
import TimelineContext from "../../contexts/timelineContext";
import LoadingComponent from "../../components/LoadingComponent";
import { api } from "../../services/api";

export default function FeedPosts({ updatePosts, dialog }) {
  const { userData } = useContext(UserContext);
  const { timeline, setTimeline } = useContext(TimelineContext);
  const { reload, setReload } = useContext(TimelineContext);
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
    const response = await api.loadPosts(userData.token, loadNumber);

    if (typeof response.data === "string") {
      setHasMore(false);
      return;
    }
    let aux = [...timeline];
    response.data.map((elem) => {
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
          if (userData.name === post.userName) {
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
