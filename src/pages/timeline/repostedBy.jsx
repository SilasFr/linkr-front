import { useContext, useEffect, useState } from "react";
import {
  RepostedByIcon,
  RepostIcon,
} from "../../components/TimelineComponents";
import UserContext from "../../contexts/userContext";
import { api } from "../../services/api";

export default function RepostedBy({ userId }) {
  const { userData } = useContext(UserContext);
  const [name, setName] = useState("");
  useEffect(() => {
    const promise = api.getUserById(userData.token, userId);
    promise.then((response) => setName(response.data.name));
    promise.catch((error) => alert(error.response));
  }, []);
  return (
    <RepostedByIcon>
      <RepostIcon />
      <p>Re-posted by {name}</p>
    </RepostedByIcon>
  );
}
