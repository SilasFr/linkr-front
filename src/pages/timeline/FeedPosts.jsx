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
import ReactHashtag from "react-hashtag";

export default function FeedPosts({ posts }) {
  function Hashtags(post) {
    return (
      <ReactHashtag
        renderHashtag={(hashtagValue) => (
          <StyledHashtag
            key={post.id}
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
            <h4>{Hashtags(post)}</h4>
            <LinkPreview onClick={() => window.open(post.link)}>
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

/*   const posts = [
    {
      id: 1,
      link: "https://www.npmjs.com/package/react-hashtag",
      profilePic:
        "https://www.maisgoias.com.br/cdn-cgi/image/fit=cover,width=1200,height=800,quality=90,format=auto/https://uploads.emaisgoias.com.br/2021/03/patrick-1500.jpg",
      userName: "Ze do caroço",
      description: "Arroz #batata #canela #cancer",
      title: "Ze do caroço",
      image:
        "https://www.maisgoias.com.br/cdn-cgi/image/fit=cover,width=1200,height=800,quality=90,format=auto/https://uploads.emaisgoias.com.br/2021/03/patrick-1500.jpg",
      userName: "Moraizin",
    },
  ];

  console.log(posts); */
