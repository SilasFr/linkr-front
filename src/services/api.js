/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */

import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
// const BASE_URL = 'https://linkr-back.herokuapp.com';

async function createUser(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

async function login(user) {
  const response = await axios.post(`${BASE_URL}/`, user);
  return response.data;
}

async function newPost(postData, token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const newPostResponse = await axios.post(`${BASE_URL}/posts/new`, postData, config);
  return newPostResponse;
}

async function getPosts(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const allPosts = await axios.get(`${BASE_URL}/posts`, config);
  return allPosts;
}

export const api = {
  createUser,
  login,
  newPost,
  getPosts,
};
