import { useContext } from "react";
import {
  PostsList,
  TimelineMessage,
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import IndividualPost from "../../components/IndividualPost";
import TrashIcon from "./TrashIcon";
import { useNavigate } from "react-router-dom";
import LikeIcon from "./likeIcon";

export default function FeedPosts({ posts, dialog }) {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  if (typeof posts === "string") {
    return (
      <TimelineMessage>
        <p>{posts}</p>
      </TimelineMessage>
    );
  }

  return (
    <PostsList>
      {posts.map((post) => {
        let renderTrashIcon = false;
        let renderPenIcon = false;
        if (userData.name === post.userName) {
          renderTrashIcon = true;
          renderPenIcon = true;
        }
        return (
          <IndividualPost
            key={posts.indexOf(post)}
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
