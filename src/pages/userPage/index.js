import { useEffect, useState } from "react";
import { useContext } from "react";
import FeedPosts from "../timeline/FeedPosts";
import UserContext from "../../contexts/userContext";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import Nav from "../timeline/navbar";
import { TimelineMessage } from "../../components/TimelineComponents";
import {
  MainContainer, 
  MainFeed,
  ContentContainer, 
  HashtagBox, 
  HorizontalLine } from "../../components/HomeComponents";
import { ClipLoader } from "react-spinners";
import ModalComponent from "../timeline/modal";
import HeaderComponent from "../../components/Header";
import styled from "styled-components";

export default function UserPage() {
  const userId = useParams().id;
  const { userData } = useContext(UserContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const modalControl = {
    open,
    setOpen,
    onOpenModal,
    onCloseModal,
  };

  const [hashtagsArray, setHashtagsArray] = useState([]);
  const [sessionUserId, setSessionUserId] = useState(null)
  const [followState, setFollowState] = useState(null)
  const [followButton, setFollowButton] = useState(null)
  const [disabled, setDisabled] = useState(false)

  console.log(sessionUserId)
  
  useEffect(async () => {
    try {
      const response = await api.getUserId(userData.token);
      setSessionUserId(response.userId)
    } catch (error) {
      console.log(error)
    }
  }, []);

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

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await api.loadPostsByUserId(userData.token, userId);
      setPosts(response.data);
      setLoading(false);
    } catch {
      alert(
        '"An error occured while trying to fetch the posts, please refresh the page"'
      );
    }
  }, []);

  useEffect(async () => {
    try {
      console.log(followState, followButton)
      const verifyFollow = await api.verifyFollow(sessionUserId, userId)
      if(verifyFollow.rows.length !== 0) {
        setFollowState(true)
        setFollowButton('unfollow')
      } else {
        setFollowState(false)
        setFollowButton('follow')
      }
    } catch (error){
      alert('Somthing went wrong. Please try again later.')
    }
  }, [sessionUserId])

  async function handleFollow(sessionUserId, userId) {
    try {
      setDisabled(true)
      if(followState === true) {
        await api.unfollow(sessionUserId, userId)
        setFollowState(false)
        setFollowButton('follow')
      }

      if(followState === false) {
        await api.follow(sessionUserId, userId)
        setFollowState(true)
        setFollowButton('unfollow')
      }
      setDisabled(false)
    } catch (error) {
      console.log('erro no handleFollow')
      alert('Somthing went wrong. Please try again later.')
    }
  }

  return (
    <MainContainer>
      <HeaderComponent />
      <ContentContainer>
        <MainFeed>
          <h1>{userData.name}</h1>
          <Nav />
          <main>
            {loading ? (
              <TimelineMessage>
                <p>Loading... </p>
                <ClipLoader color="white" />
              </TimelineMessage>
            ) : (
              <FeedPosts posts={posts} dialog={modalControl} />
              )}
            <ModalComponent modalControl={modalControl} />
          </main>
        </MainFeed>
        <Aside>
          {parseInt(sessionUserId) !== parseInt(userId) ?
            <FollowButton disabled={disabled} className={`${followButton}`} onClick={() => handleFollow(sessionUserId, userId)}>
              {followState === false ? "Follow" : "Unfollow"}
            </FollowButton>
            :
            <></>
          }
          <HashtagBox>
            <h3>trending</h3>
            <HorizontalLine></HorizontalLine>
            <ul>
              {typeof hashtagsArray === "string"
                ? ""
                : hashtagsArray.map((hashtag) => (
                  <Link to={`/hashtag/${hashtag.topic}`} key={hashtag.id}>
                      <li># {hashtag.topic}</li>
                    </Link>
                  ))}
            </ul>
          </HashtagBox>
        </Aside>
      </ContentContainer>
    </MainContainer>
  );
}

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .follow {
    background: #1877F2;
    border-radius: 5px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
  }

  .unfollow{
    background: #FFFFFF;
    border-radius: 5px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #1877F2;
  }
`

const FollowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 112px;
  height: 31px;
  left: 1066px;
  top: 141px;

  margin-top: 100px;
  margin-bottom: -95px;

  cursor: pointer;
`