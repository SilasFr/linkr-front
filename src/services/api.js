import axios from "axios";

/* const BASE_URL = "https://linkr-back.herokuapp.com"; */

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}
async function createUser(user) {
  await axios.post(`${process.env.BASE_URL}/sign-up`, user);
}

async function login(user) {
  const response = await axios.post(`${process.env.BASE_URL}/`, user);
  return response.data;
}

async function loadPosts(token, offset) {
  let offsetQuery = "";
  if (offset) {
    offsetQuery = `?offset=${offset}`;
  }
  const config = createConfig(token);
  const result = await axios.get(
    `${process.env.BASE_URL}/timeline${offsetQuery}`,
    config
  );
  return result;
}

async function loadPostsByHashtag(hashtag, token) {
  const config = createConfig(token);
  const result = await axios.get(
    `${process.env.BASE_URL}/hashtag/${hashtag}`,
    config
  );
  return result;
}
async function loadPostsByUserId(token, userId) {
  const config = createConfig(token);
  const result = await axios.get(
    `${process.env.BASE_URL}/timeline/${userId}`,
    config
  );
  return result;
}

async function logout(token) {
  const response = await axios.post(`${process.env.BASE_URL}/logout`, token);
  return response.data;
}

async function newPost(postData, token) {
  const config = createConfig(token);
  const newPostResponse = await axios.post(
    `${process.env.BASE_URL}/posts/new`,
    postData,
    config
  );
  return newPostResponse;
}

async function postHashtags(hashtagsArray, token) {
  const hashtags = {
    hashtags: hashtagsArray,
    token: token,
  };
  const response = await axios.post(
    `${process.env.BASE_URL}/hashtag`,
    hashtags
  );
  return response;
}

async function getHashtags() {
  const result = await axios.get(`${process.env.BASE_URL}/hashtag`);
  return result.data;
}

async function validateSession(token) {
  const config = createConfig(token);
  const response = await axios.get(`${process.env.BASE_URL}/`, config);
  return response.data;
}
async function searchUser(token, query) {
  const config = createConfig(token);
  const response = await axios.get(
    `${process.env.BASE_URL}/timeline/users?user=${query}`,
    config
  );
  return response;
}

async function deletePost(id, token) {
  const config = createConfig(token);
  const response = await axios.delete(
    `${process.env.BASE_URL}/posts/${id}`,
    config
  );
  return response;
}
async function editPost(postData, id, token) {
  const config = createConfig(token);
  const response = await axios.put(
    `${process.env.BASE_URL}/posts/${id}`,
    postData,
    config
  );
  return response;
}
async function loadPostById(id, token) {
  const config = createConfig(token);
  const response = await axios.get(
    `${process.env.BASE_URL}/posts/${id}`,
    config
  );
  return response;
}

async function getLikesByPostId(id, token) {
  const config = createConfig(token);
  const response = await axios.get(
    `${process.env.BASE_URL}/likes/${id}`,
    config
  );
  return response.data;
}

async function likePost(id, token) {
  const config = createConfig(token);
  const response = await axios.post(
    `${process.env.BASE_URL}/posts/${id}/like`,
    {},
    config
  );
  return response;
}

async function dislikePost(id, token) {
  const config = createConfig(token);
  const response = await axios.post(
    `${process.env.BASE_URL}/posts/${id}/dislike`,
    {},
    config
  );
  return response;
}

export const api = {
  createUser,
  login,
  logout,
  loadPosts,
  loadPostsByHashtag,
  loadPostsByUserId,
  validateSession,
  newPost,
  searchUser,
  deletePost,
  postHashtags,
  getHashtags,
  editPost,
  loadPostById,
  getLikesByPostId,
  likePost,
  dislikePost,
};
