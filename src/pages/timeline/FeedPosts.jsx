import { useContext, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  PostsList,
  TimelineMessage,
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import IndividualPost from "../../components/IndividualPost";
import TimelineContext from "../../contexts/timelineContext";

export default function FeedPosts({ dialog }) {
  const { userData } = useContext(UserContext);
  const { timeline, setTimeLine } = useContext(TimelineContext);
  const [hasMore, setHasMore] = useState(true);
  const [loadNumber, setLoadNumber] = useState(0);
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
    response.data.map((elem) => {
      setTimeLine([...timeline, elem]);
    });

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
