import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { TimelineMessage } from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";
import FeedPosts from "./FeedPosts";

export default function Timeline({ reload, setReload }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timeline, setTimeline] = useState();
  const { userData } = useContext(UserContext);

  useEffect(() => {
    try {
      setLoading(true);
      const promise = api.loadPosts(userData.token);
      promise.then((response) => {
        setPosts(response.data);
        setLoading(false);
      });
    } catch (e) {
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
  }, [reload, userData.token]);

  useEffect(() => {
    renderResponse();
  }, [posts]);

  function renderResponse() {
    if (posts.length > 0) {
      return setTimeline(<FeedPosts posts={posts} />);
    }
    return setTimeline(
      <TimelineMessage>
        <p>There are no posts yet</p>
      </TimelineMessage>
    );
  }

  return (
    <main>
      {loading ? (
        <TimelineMessage>
          <p>Loading... </p>
          <ClipLoader color="white" />
        </TimelineMessage>
      ) : (
        timeline
      )}
    </main>
  );
}
