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
            <h3>{post.title}</h3>
            <h4>
              Muito maneiro esse tutorial MaterialUI + React! #hashtags #react
              #javascript
            </h4>
            <LinkPreview>
              <LinkData>
                <h5>{post.title}</h5>
                <p>{post.description}</p>
                <h6>{post.url}</h6>
              </LinkData>
              <img src={post.image} alt="" />
            </LinkPreview>
          </PostContent>
        </PostCard>
      ))}
    </PostsList>
  );
}
