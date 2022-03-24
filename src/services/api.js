import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
// const BASE_URL = 'https://linkr-back.herokuapp.com';

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
async function createUser(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

async function login(user) {
  const response = await axios.post(`${BASE_URL}/`, user);
  return response.data;
}

async function newPost(postData, token) {
  const config = createConfig(token);
  const newPostResponse = await axios.post(`${BASE_URL}/posts/new`, postData, config);
  return newPostResponse;
}

async function validateSession(token) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/`, config);
  return response.data;
}

export const api = {
  createUser,
  login,
  validateSession,
  newPost,
};