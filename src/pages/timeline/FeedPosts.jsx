import {
  LinkData,
  LinkPreview,
  PostCard,
  PostContent,
  PostsList,
  PostUserInfo,
  TimelineMessage,
} from "../../components/TimelineComponents";
import TrashIcon from "./TrashIcon";

export default function FeedPosts({ posts, dialog }) {
  if (typeof posts === "string") {
    return (
      <TimelineMessage>
        <p>{posts}</p>
      </TimelineMessage>
    );
  }
  return (
    <PostsList>
      {posts.map((post) => (
        <PostCard key={post.id}>
          <PostUserInfo>
            <img src={post.profilePic} alt="user avatar" />
          </PostUserInfo>
          <PostContent>
            <h3>{post.userName}</h3>
            <h4>{post.description}</h4>
            <LinkPreview onClick={() => window.open(post.link)}>
              <LinkData>
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <h6>{post.link}</h6>
              </LinkData>
              <img src={post.image} alt={post.title} />
            </LinkPreview>

            <TrashIcon postId={post.id} dialog={dialog} />
          </PostContent>
        </PostCard>
      ))}
    </PostsList>
  );
}
