import PenIcon from "./PenIcon";
import TrashIcon from "./TrashIcon";
import {
  LinkData,
  LinkPreview,
  PostContent,
  StyledHashtag,
} from "../TimelineComponents";
import { useState, useEffect, useRef, useContext } from "react";

import ReactHashtag from "@mdnm/react-hashtag";

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import UserContext from "../../contexts/userContext";

import LikeIcon from "./likeIcon";
import CommentsButton from "./CommentsButton";
import {
  CommentList,
  CommentsContainer,
  IndividualComment,
  PostCard,
  PostUserInfo,
} from "./styles";
import ComentForm from "./comentForm";

export default function IndividualPost({
  post,
  dialog,
  renderPenIcon,
  renderTrashIcon,
}) {
  const [editing, setEditing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [newDescription, setNewDescription] = useState("loading");
  const [isCommenting, setIsCommenting] = useState(false);
  const [commentsList, setCommentsList] = useState([]);
  const [commentsQty, setCommentsQty] = useState(post.commentQty);

  const { userData } = useContext(UserContext);

  const navigate = useNavigate();

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
    <li>
      <div>
        <PostCard key={post.id}>
          <PostUserInfo>
            <img src={post.profilePic} alt="user avatar" />
            <LikeIcon key={post.id * Date.now()} id={post.id} postInfo={post} />
            <CommentsButton
              postId={post.id}
              isCommenting={isCommenting}
              setIsCommenting={setIsCommenting}
              setCommentsList={setCommentsList}
              commentsQty={commentsQty}
              token={userData.token}
            ></CommentsButton>
          </PostUserInfo>
          <PostContent>
            <h3 onClick={() => navigate(`/user/${post.author}`)}>
              {post.userName}
            </h3>
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
      </div>
      {isCommenting && (
        <CommentsContainer>
          <CommentList>
            {commentsList &&
              commentsList.map((comment) => {
                return (
                  <IndividualComment key={commentsList.indexOf(comment)}>
                    <img src={comment.profilePic}></img>
                    <div>
                      <h1>
                        {comment.name}
                        {comment.isAuthor && <p>• post's author</p>}
                        {comment.followed &&
                          comment.authorId !== userData.id && (
                            <p>• following</p>
                          )}
                        {comment.authorId === userData.id && <p>• you</p>}
                      </h1>
                      <span>{comment.content}</span>
                    </div>
                  </IndividualComment>
                );
              })}
          </CommentList>
          <ComentForm
            postId={post.id}
            setCommentsList={setCommentsList}
            setCommentsQty={setCommentsQty}
            commentsQty={commentsQty}
          />
        </CommentsContainer>
      )}
    </li>
  );
}
