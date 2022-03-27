import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MainContainer,
  Header,
  UserMenu,
  MenuLogout,
  UserAvatar,
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

export default function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  async function handleLogout(e) {
    e.preventDefault();

    const token = {
      token: userData.token,
    };

    try {
      await api.logout(token);

      setUserData({
        name: "",
        token: "",
        profilePic: "",
      });
      navigate("/");
    } catch (e) {
      alert("Sua sessão já foi expirada.");
      navigate("/");
    }
  }

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
      setLoading(false);
      setFormData({});
      setReload(!reload);
      updateHashtags();
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
      <Header>
        <h1>linkr</h1>

        <UserMenu>
          <ion-icon
            name={showMenu ? "chevron-up" : "chevron-down"}
            onClick={() => setShowMenu((currentShowMenu) => !currentShowMenu)}
          ></ion-icon>
          <UserAvatar src={userData.profilePic} />
        </UserMenu>
      </Header>
      <>
        {showMenu ? (
          <MenuLogout>
            <Link to={"/"} onClick={handleLogout}>
              <p>Logout</p>
            </Link>
          </MenuLogout>
        ) : null}
      </>
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
                  <Link to={`/hashtag/${hashtag.topic}`}>
                    <li key={hashtag.id}># {hashtag.topic}</li>
                  </Link>
                ))}
          </ul>
        </HashtagBox>
      </ContentContainer>
    </MainContainer>
  );
}
