import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import {
  Container,
  Feed,
  Form,
  ProfilePic,
  TimelineMessage,
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";
import FeedPosts from "./FeedPosts";
import Nav from "./navbar";

export default function Timeline() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    try {
      setLoading(true);
      const request = api.loadPosts(userData.token);
      request.then((response) => {
        setPosts(response.data);
        renderResponse();
        setLoading(false);
      });
    } catch (e) {
      setLoading(false);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
      console.log(e);
    }
  }, []);

  function renderResponse() {
    if (posts.length > 0) {
      return setTimeline(<FeedPosts posts={posts} />);
    }
    setTimeline(
      <TimelineMessage>
        <p>There are no posts yett</p>
      </TimelineMessage>
    );
  }
  return (
    <>
      <Nav />

      <Container>
        <Feed>
          <header>
            <p>timeline</p>
          </header>

          <main>
            <div className="new-post">
              <div className="profile-pic">
                <ProfilePic className="img">
                  <img src="#" alt="profile" />
                </ProfilePic>
              </div>
              <div className="post-info">
                <p className="post-info-title">
                  What are you going to share today?
                </p>
                <Form action="">
                  <input type="url" placeholder="http://..." />
                  <input
                    className="description"
                    type="text"
                    placeholder="Awesome article about #javascript"
                  />
                  <button>Publishss</button>
                </Form>
              </div>
            </div>

            {loading ? (
              <TimelineMessage>
                <p>Loading... </p>
                <ClipLoader color="white" />
              </TimelineMessage>
            ) : (
              timeline
            )}
            <div className="posts"></div>
          </main>
        </Feed>
      </Container>
    </>
  );
}
