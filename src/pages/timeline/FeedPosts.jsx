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
        <PostCard>
          <PostUserInfo>
            <img
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
              alt="user avatar"
            />
          </PostUserInfo>
          <PostContent>
            <h3>{post.author}</h3>
            <h4>{post.description}</h4>
            <LinkPreview>
              <LinkData>
                <h5>{post.link.title}</h5>
                <p>{post.link.description}</p>
                <h6>{post.link.url}</h6>
              </LinkData>
              <img src={post.link.image} alt={post.link.title} />
            </LinkPreview>
          </PostContent>
        </PostCard>
      ))}
    </PostsList>
  );
}
