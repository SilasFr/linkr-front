/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */

import React /* ,{ useState } */ from 'react';
import { IoChevronDownOutline as DownArrow } from 'react-icons/io5';
import {
  MainContainer, Header, UserMenu, UserAvatar,
  MainFeed, NewPost, PostsList, PostCard, NewPostForm, PostUserInfo,
  NewPostUrl, NewPostDescription,
  ButtonPublish, PostContent, LinkPreview,
  LinkData,
} from '../../components/HomeComponents';

export default function Home() {
  return (
    <MainContainer>
      <Header>
        <h1>linkr</h1>

        <UserMenu>
          <DownArrow />
          <UserAvatar src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" />
        </UserMenu>
      </Header>

      <MainFeed>
        <h1>timeline</h1>
        <NewPost>
          <PostUserInfo>
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" alt="user avatar" />
          </PostUserInfo>
          <NewPostForm>
            <h2>What are you going to share today?</h2>
            <NewPostUrl
              name="link"
              placeholder="http://..."
              type="url"
              // value={formData.email || ''}
              // onChange={handleInputChange}
              required
            />
            <NewPostDescription
              name="desscription"
              placeholder="Comment about the link you're sharing! (optional)"
              type="text"
              // value={formData.email || ''}
              // onChange={handleInputChange}
              required
            />
            <ButtonPublish
              type="submit"
            >
              Publish
            </ButtonPublish>
          </NewPostForm>
        </NewPost>
        <PostsList>
          <PostCard>
            <PostUserInfo>
              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" alt="user avatar" />
            </PostUserInfo>
            <PostContent>
              <h3>Juvenal Juvêncio</h3>
              <h4>Muito maneiro esse tutorial MaterialUI + React! #hashtags #react #javascript</h4>
              <LinkPreview>
                <LinkData>
                  <h5>Link preview title</h5>
                  <p>link preview not so short description maybe even multiple lines</p>
                  <h6>https://medium.com/@pshrmn/a-simple-react-router</h6>
                </LinkData>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
              </LinkPreview>
            </PostContent>
          </PostCard>

          <PostCard>
            <PostUserInfo>
              <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" alt="user avatar" />
            </PostUserInfo>
            <PostContent>
              <h3>Juvenal Juvêncio</h3>
              <h4>Muito maneiro esse tutorial MaterialUI + React! #hashtags #react #javascript</h4>
              <LinkPreview>
                <LinkData>
                  <h5>Link preview title</h5>
                  <p>link preview not so short description maybe even multiple lines</p>
                  <h6>https://medium.com/@pshrmn/a-simple-react-router</h6>
                </LinkData>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" />
              </LinkPreview>
            </PostContent>
          </PostCard>
        </PostsList>
      </MainFeed>

    </MainContainer>
  );
}
