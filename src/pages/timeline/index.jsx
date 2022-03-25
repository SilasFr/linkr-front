import { useContext, useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { TimelineMessage } from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";
import FeedPosts from "./FeedPosts";

export default function Timeline({ reload, setReload }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userData } = useContext(UserContext);

  async function updatePosts() {
    try {
      setLoading(true);
      const response = await api.loadPosts(userData.token);
      setPosts(response.data);
    } catch (e) {
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
  console.log(posts);

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
