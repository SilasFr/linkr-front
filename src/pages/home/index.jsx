import React, { useContext, useState, useEffect } from 'react';
import { IoChevronDownOutline as DownArrow } from 'react-icons/io5';
import {
  MainContainer, Header, UserMenu, UserAvatar,
  MainFeed, NewPost, PostsList, PostCard, NewPostForm, PostUserInfo,
  NewPostUrl, NewPostDescription,
  ButtonPublish, PostContent, LinkPreview,
  LinkData,
} from '../../components/HomeComponents';
import { api } from '../../services/api';
import UserContext from '../../contexts/userContext';

export default function Home() {
  const { userData } = useContext(UserContext);
  const [postsArray, setPostsArray] = useState([]);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  function updatePosts() {
    const postsPromise = api.getPosts(userData.token);
    postsPromise.then((res) => {
      setPostsArray(res.data);
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await api.newPost(formData, userData.token);
      setLoading(false);
      setFormData({});
      updatePosts();
    } catch (error) {
      console.log(error);
      alert('Houve um erro ao publicar seu link');
      setLoading(false);
      setFormData({});
    }
  }

  function handleInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  useEffect(updatePosts, []);

  return (
    <MainContainer>
      <Header>
        <h1>linkr</h1>

        <UserMenu>
          <DownArrow />
          <UserAvatar src={userData.profilePic} />
        </UserMenu>
      </Header>

      <MainFeed>
        <h1>timeline</h1>
        <NewPost>
          <PostUserInfo>
            <img src={userData.profilePic} alt="user avatar" />
          </PostUserInfo>
          <NewPostForm
            onSubmit={handleSubmit}
          >
            <h2>What are you going to share today?</h2>
            <NewPostUrl
              name="link"
              placeholder="http://..."
              type="url"
              value={formData.link || ''}
              onChange={handleInputChange}
              required
            />
            <NewPostDescription
              name="description"
              placeholder="Comment about the link you're sharing! (optional)"
              type="text"
              value={formData.description || ''}
              onChange={handleInputChange}
            />
            <ButtonPublish disabled={loading}>
              {loading ? 'Publishing...' : 'Publish'}
            </ButtonPublish>
          </NewPostForm>
        </NewPost>
        <PostsList>
          {postsArray.map((post) => (
            <PostCard key={post.id}>
              <PostUserInfo>
                <img src={userData.profilePic} alt="user avatar" />
              </PostUserInfo>
              <PostContent>
                <h3>{userData.name}</h3>
                <h4>{post.description}</h4>
                <LinkPreview>
                  <LinkData>
                    <h5>Link preview title</h5>
                    <p>link preview not so short description maybe even multiple lines</p>
                    <h6>{post.link}</h6>
                  </LinkData>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
                </LinkPreview>
              </PostContent>
            </PostCard>
          ))}
        </PostsList>
      </MainFeed>

    </MainContainer>
  );
}
