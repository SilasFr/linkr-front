/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */

import React /* ,{ useState } */ from 'react';
import { IoChevronDownOutline as DownArrow } from 'react-icons/io5';
import {
  MainContainer, Header, UserMenu, UserAvatar,
  MainFeed, NewPost, PostsList, PostCard, NewPostForm, NewPostUserInfo,
  NewPostUrl, NewPostDescription,
  ButtonPublish,
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
          <NewPostUserInfo>
            <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg" alt="user avatar" />
          </NewPostUserInfo>
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
          <PostCard> single post </PostCard>
          <PostCard> single post </PostCard>
          <PostCard> single post </PostCard>
          <PostCard> single post </PostCard>
        </PostsList>
      </MainFeed>

    </MainContainer>
  );
}
