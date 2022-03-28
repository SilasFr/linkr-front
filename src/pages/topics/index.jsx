import { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";
import { ClipLoader } from "react-spinners";
import { TimelineMessage } from "../../components/TimelineComponents";
import FeedPosts from "../timeline/FeedPosts";

export default function Topics({ reload, setReload }) {
  const { hashtag } = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(UserContext);

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
        '"An error occured while trying to fetch the posts, please refresh the page"'
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    if (!reload) return;
    updatePosts();
    setReload(!reload);
  }, [reload]);
  return (
    <main>
      {loading ? (
        <TimelineMessage>
          <p>Loading... </p>
          <ClipLoader color="white" />
        </TimelineMessage>
      ) : (
        <FeedPosts posts={posts} />
      )}
    </main>
  );
}
