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

async function newPost(postData) {
  const newPostResponse = await axios.post(`${BASE_URL}/posts/new`, postData);
  return newPostResponse;
}

export const api = { createUser, login, newPost };
