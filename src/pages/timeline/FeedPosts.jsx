import {
  LinkData,
  LinkPreview,
  PostCard,
  PostContent,
  PostsList,
  PostUserInfo,
} from "../../components/TimelineComponents";

export default function FeedPosts({ posts }) {
  return (
    <PostsList>
      {posts.map((post) => (
        <PostCard key={post.id} onClick={() => window.open(post.link)}>
          <PostUserInfo>
            <img src={post.profilePic} alt="user avatar" />
          </PostUserInfo>
          <PostContent>
            <h3>{post.userName}</h3>
            <h4>{post.description}</h4>
            <LinkPreview>
              <LinkData>
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <h6>{post.link}</h6>
              </LinkData>
              <img src={post.image} alt={post.title} />
            </LinkPreview>
          </PostContent>
        </PostCard>
      ))}
    </PostsList>
  );
}
