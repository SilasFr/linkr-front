import { useContext } from "react";
import {
  LinkData,
  LinkPreview,
  PostCard,
  PostContent,
  PostsList,
  PostUserInfo,
  TimelineMessage,
  StyledHashtag,
} from "../../components/TimelineComponents";
import ReactHashtag from "@mdnm/react-hashtag";
import UserContext from "../../contexts/userContext";
import TrashIcon from "./TrashIcon";
import LikeIcon from "./likeIcon";

export default function FeedPosts({ posts, dialog }) {
  const { userData } = useContext(UserContext);
  if (typeof posts === "string") {
    return (
      <TimelineMessage>
        <p>{posts}</p>
      </TimelineMessage>
    );
  }

  function Hashtags(post) {
    return (
      <ReactHashtag
        renderHashtag={(hashtagValue) => (
          <StyledHashtag
            key={post.id * Date.now() * Math.random()}
            to={`/hashtag/${hashtagValue.replace("#", "")}`}
          >
            {hashtagValue}
          </StyledHashtag>
        )}
      >
        {post.description}
      </ReactHashtag>
    );
  }

  return (
    <PostsList>
      {posts.map((post) => {
        let renderTrashIcon = false;
        if (userData.name === post.userName) {
          renderTrashIcon = true;
        }
        return (
          <PostCard key={Date.now() / post.id}>
            <PostUserInfo>
              <img src={post.profilePic} alt="user avatar" />
              <LikeIcon
                key={post.id * Date.now()}
                id={post.id}
                postInfo={post}
              />
            </PostUserInfo>
            <PostContent>
              <h3>{post.userName}</h3>
              <h4>{Hashtags(post)}</h4>
              <LinkPreview onClick={() => window.open(post.link)}>
                <LinkData>
                  <h5>{post.title}</h5>
                  <p>{post.description}</p>
                  <h6>{post.link}</h6>
                </LinkData>
                <img src={post.image} alt={post.title} />
              </LinkPreview>

              {renderTrashIcon && (
                <TrashIcon postId={post.id * Date.now()} dialog={dialog} />
              )}
            </PostContent>
          </PostCard>
        );
      })}
    </PostsList>
  );
}
