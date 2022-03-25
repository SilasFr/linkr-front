import {
  LinkData,
  LinkPreview,
  PostCard,
  PostContent,
  PostsList,
  PostUserInfo,
  TimelineMessage,
  HeartIcon,
} from "../../components/TimelineComponents";

import { AiOutlineHeart as EmptyHeart,
  AiFillHeart as FilledHeart } from 'react-icons/ai';

export default function FeedPosts({ posts }) {
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
        <PostCard key={post.id} onClick={() => window.open(post.link)}>
          <PostUserInfo>
            <img src={post.profilePic} alt="user avatar" />
            <HeartIcon>
              {console.log(post) /* 'liked' key no obj */ }
              <EmptyHeart />
              <FilledHeart color='#AC0000'/>
            </HeartIcon>
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
