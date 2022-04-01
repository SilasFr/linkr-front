import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";
import { ClipLoader } from "react-spinners";
import { TimelineMessage } from "../../components/TimelineComponents";
import FeedPosts from "../timeline/FeedPosts";
import TimelineContext from "../../contexts/timelineContext";

export default function Topics() {
  const { hashtag } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(UserContext);
  const { reload, setReload } = useContext(TimelineContext);
  const [backButton, setBackButton] = useState(false);

  async function updatePosts() {
    try {
      setLoading(true);
      const response = await api.loadPostsByHashtag(hashtag, userData.token);
      setPosts(response.data);
    } catch (e) {
      if (e.response.status === 404) {
        alert("This topic does not exist");
        navigate("/timeline");
        return;
      }
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    updatePosts();
  }, [reload, backButton]);

  window.onpopstate = () => {
    setBackButton(!backButton);
  };
  return (
    <main>
      {loading ? (
        <TimelineMessage>
          <p>Loading... </p>
          <ClipLoader color="white" />
        </TimelineMessage>
      ) : (
        <FeedPosts identifier={hashtag} type={"topic"} posts={posts} />
      )}
    </main>
  );
}
