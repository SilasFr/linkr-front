import PenIcon from "../pages/timeline/PenIcon";
import TrashIcon from "../pages/timeline/TrashIcon";
import {
  LinkData,
  LinkPreview,
  PostCard,
  PostContent,
  PostUserInfo,
  StyledHashtag,
} from "./TimelineComponents";
import { useState, useEffect, useRef, useContext } from "react";

import ReactHashtag from "@mdnm/react-hashtag";
import { api } from "../services/api";
import UserContext from "../contexts/userContext";

import LikeIcon from "../pages/timeline/likeIcon";

export default function IndividualPost({
  post,
  dialog,
  renderPenIcon,
  renderTrashIcon,
}) {
  const [editing, setEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [newDescription, setNewDescription] = useState("loading");

  const { userData } = useContext(UserContext);

  async function updatePost() {
    try {
      const response = await api.loadPostById(post.id, userData.token);
      setNewDescription(response.data.description);
    } catch (e) {
      alert(
        '"An error occured while trying to fetch the posts, please refresh the page"'
      );
    }
  }
  console.log(newDescription);
  useEffect(() => updatePost(), [editing]);

  function handleInputChange(e) {
    setNewDescription(e.target.value);
  }

  function Hashtags(post) {
    return (
      <ReactHashtag
        renderHashtag={(hashtagValue) => (
          <StyledHashtag
            key={hashtagValue}
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

  async function handleKeyDown(e) {
    if (e.key === "Escape") {
      setEditing(false);
    }
    if (e.key === "Enter") {
      setIsUploading(true);
      try {
        await api.editPost(
          { description: newDescription, link: post.link },
          post.id,
          userData.token
        );
        const { description } = (
          await api.loadPostById(post.id, userData.token)
        ).data;
        setNewDescription(description);
        setIsUploading(false);
        setEditing(false);
      } catch (e) {
        alert("Edição incompleta. Tente novamente mais tarde.");
        setIsUploading(false);
      }
    }
  }

  const inputRef = useRef(null);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
    setNewDescription("loading");
  }, [editing]);

  return (
    <PostCard key={post.id}>
      <PostUserInfo>
        <img src={post.profilePic} alt="user avatar" />
        <LikeIcon key={post.id * Date.now()} id={post.id} />
      </PostUserInfo>
      <PostContent>
        <h3>{post.userName}</h3>
        {editing ? (
          <input
            value={newDescription}
            onChange={handleInputChange}
            onKeyDown={(e) => handleKeyDown(e)}
            disabled={isUploading}
            ref={inputRef}
          ></input>
        ) : (
          <h4>{Hashtags({ ...post, description: newDescription })}</h4>
        )}
        <LinkPreview onClick={() => window.open(post.link)}>
          <LinkData>
            <h5>{post.title}</h5>

            <p>{post.description}</p>

            <h6>{post.link}</h6>
          </LinkData>
          <img src={post.image} alt={post.title} />
        </LinkPreview>
        {renderPenIcon && (
          <PenIcon
            postId={post.id}
            dialog={dialog}
            editing={editing}
            setEditing={setEditing}
          />
        )}
        {renderTrashIcon && <TrashIcon postId={post.id} dialog={dialog} />}
      </PostContent>
    </PostCard>
  );
}
