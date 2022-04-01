import { useContext } from "react";
import {
  PostsList,
  TimelineMessage,
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import IndividualPost from "../../components/IndividualPost";
import TimelineContext from "../../contexts/timelineContext";

export default function FeedPosts({ dialog }) {
  const { userData } = useContext(UserContext);
  const { timeline } = useContext(TimelineContext);
  if (typeof timeline === "string") {
    return (
      <TimelineMessage>
        <p>{timeline}</p>
      </TimelineMessage>
    );
  }

  return (
    <PostsList>
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
    </PostsList>
  );
}
