export default function FeedPosts() {
  return (
    <>
      <PostsList>
          <PostCard>
            <PostUserInfo>
              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" alt="user avatar" />
            </PostUserInfo>
            <PostContent>
              <h3>Juvenal Juvêncio</h3>
              <h4>Muito maneiro esse tutorial MaterialUI + React! #hashtags #react #javascript</h4>
              <LinkPreview>
                <LinkData>
                  <h5>Link preview title</h5>
                  <p>link preview not so short description maybe even multiple lines</p>
                  <h6>https://medium.com/@pshrmn/a-simple-react-router</h6>
                </LinkData>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
              </LinkPreview>
            </PostContent>
          </PostCard>
    </>
  );
}
