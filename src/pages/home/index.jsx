import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MainContainer,
  MainFeed,
  NewPost,
  NewPostForm,
  PostUserInfo,
  NewPostUrl,
  NewPostDescription,
  ButtonPublish,
  ContentContainer,
  HashtagBox,
  HorizontalLine,
} from "../../components/HomeComponents";
import { api } from "../../services/api";
import UserContext from "../../contexts/userContext";
import Timeline from "../timeline";
import * as extract from "mention-hashtag";
import HeaderComponent from "../../components/Header";

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(true);
  const navigate = useNavigate();
  const [hashtagsArray, setHashtagsArray] = useState([]);

  async function updateHashtags() {
    try {
      const response = await api.getHashtags();
      setHashtagsArray(response);
    } catch (e) {
      alert(
        '"An error occured while trying to fetch the trending, please refresh the page"'
      );
    }
  }

  useEffect(() => {
    updateHashtags();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const hashtags = extract(formData.description, {
      symbol: false,
      type: "#",
    });

    try {
      await api.newPost(formData, userData.token);
      await api.postHashtags(hashtags, userData.token);
      await updateHashtags();
      setLoading(false);
      setFormData({});
      setReload(!reload);
    } catch (error) {
      alert("Houve um erro ao publicar seu link");
      setLoading(false);
      setFormData({});
    }
  }

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <MainContainer>
      <HeaderComponent />
      <ContentContainer>
        <MainFeed>
          <h1>timeline</h1>
          <NewPost>
            <PostUserInfo>
              <img src={userData.profilePic} alt="user avatar" />
            </PostUserInfo>
            <NewPostForm onSubmit={handleSubmit}>
              <h2>What are you going to share today?</h2>
              <NewPostUrl
                name="link"
                placeholder="http://..."
                type="url"
                value={formData.link || ""}
                onChange={handleInputChange}
                required
              />
              <NewPostDescription
                name="description"
                placeholder="Comment about the link you're sharing! (optional)"
                type="text"
                value={formData.description || ""}
                onChange={handleInputChange}
              />
              <ButtonPublish disabled={loading}>
                {loading ? "Publishing..." : "Publish"}
              </ButtonPublish>
            </NewPostForm>
          </NewPost>
          <Timeline reload={reload} setReload={setReload} />
        </MainFeed>
        <HashtagBox>
          <h3>trending</h3>
          <HorizontalLine></HorizontalLine>
          <ul>
            {typeof hashtagsArray === "string"
              ? ""
              : hashtagsArray.map((hashtag) => (
                  <Link to={`/hashtag/:${hashtag.topic}`}>
                    <li key={hashtag.id}># {hashtag.topic}</li>
                  </Link>
                ))}
          </ul>
        </HashtagBox>
      </ContentContainer>
    </MainContainer>
  );
}
