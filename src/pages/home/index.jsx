/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-no-bind */

import React /* ,{ useState } */ from 'react';
import { IoChevronDownOutline as DownArrow } from 'react-icons/io5';
import {
  MainContainer, Header, UserMenu, UserAvatar,
  MainFeed, NewPost, PostsList, Post,
} from '../../components/HomeComponents';

export default function Home() {
  // const [formData, setFormData] = useState({});

  /* function handleSubmit(e) {
    e.preventDefault();
  }
  */

  /*
  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  */
  return (
    <MainContainer>
      <Header>
        <h1>linkr</h1>

        <UserMenu>
          <DownArrow />
          <UserAvatar />
        </UserMenu>
      </Header>

      <MainFeed>
        <h2> feed_title </h2>
        <NewPost>
          new_post_form
        </NewPost>
        <PostsList>
          <Post> single post </Post>
          <Post> single post </Post>
          <Post> single post </Post>
          <Post> single post </Post>
        </PostsList>
      </MainFeed>

    </MainContainer>
  );
}
