import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

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

async function loadPosts(token, offset) {
  let offsetQuery = "";
  if (offset) {
    offsetQuery = `?offset=${offset}`;
  }
  const config = createConfig(token);
  const result = await axios.get(`${BASE_URL}/timeline${offsetQuery}`, config);
  return result;
}

async function loadPostsByHashtag(token, hashtag, offset) {
  let offsetQuery = "";
  if (offset) {
    offsetQuery = `?offset=${offset}`;
  }
  const config = createConfig(token);
  const result = await axios.get(
    `${BASE_URL}/hashtag/${hashtag}${offsetQuery}`,
    config
  );
  return result;
}
async function loadPostsByUserId(token, userId, offset) {
  let offsetQuery = "";
  if (offset) {
    offsetQuery = `?offset=${offset}`;
  }
  const config = createConfig(token);
  const result = await axios.get(
    `${BASE_URL}/timeline/${userId}${offsetQuery}`,
    config
  );
  return result;
}

async function logout(token) {
  const response = await axios.post(`${BASE_URL}/logout`, token);
  return response.data;
}

async function newPost(postData, token) {
  const config = createConfig(token);
  const newPostResponse = await axios.post(
    `${BASE_URL}/posts/new`,
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
  const response = await axios.post(`${BASE_URL}/hashtag`, hashtags);
  return response;
}

async function getHashtags() {
  const result = await axios.get(`${BASE_URL}/hashtag`);
  return result.data;
}

async function validateSession(token) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/`, config);
  return response.data;
}
async function searchUser(token, query) {
  const config = createConfig(token);
  const response = await axios.get(
    `${BASE_URL}/timeline/users?user=${query}`,
    config
  );
  return response;
}

async function deletePost(id, token) {
  const config = createConfig(token);
  const response = await axios.delete(`${BASE_URL}/posts/${id}`, config);
  return response;
}
async function editPost(postData, id, token) {
  const config = createConfig(token);
  const response = await axios.put(`${BASE_URL}/posts/${id}`, postData, config);
  return response;
}
async function loadPostById(id, token) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/posts/${id}`, config);
  return response;
}

async function getLikesByPostId(id, token) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/likes/${id}`, config);
  return response.data;
}

async function likePost(id, token) {
  const config = createConfig(token);
  const response = await axios.post(`${BASE_URL}/posts/${id}/like`, {}, config);
  return response;
}

async function dislikePost(id, token) {
  const config = createConfig(token);
  const response = await axios.post(
    `${BASE_URL}/posts/${id}/dislike`,
    {},
    config
  );
  return response;
}

async function readComments(id, token) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/posts/${id}/comment`, config);
  return response;
}
async function postComment(postId, comment, token) {
  const config = createConfig(token);
  const response = await axios.post(
    `${BASE_URL}/posts/${postId}/comment`,
    { postId: postId, comment: comment },
    config
  );
  return response;
}

async function verifyFollow(sessionUserId, userId) {
  const response = await axios.post(`${BASE_URL}/follows`, {
    sessionUserId: parseInt(sessionUserId),
    userId: parseInt(userId),
  });
  return response.data;
}

async function follow(sessionUserId, userId) {
  const response = await axios.post(`${BASE_URL}/follow`, {
    sessionUserId: parseInt(sessionUserId),
    userId: parseInt(userId),
  });
  return response.data;
}

async function unfollow(sessionUserId, userId) {
  const response = await axios.post(`${BASE_URL}/unfollow`, {
    sessionUserId: parseInt(sessionUserId),
    userId: parseInt(userId),
  });
  return response.data;
}

async function getUserId(token) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/userpage/user`, config);
  return response.data;
}

async function repost(token, postId) {
  const config = createConfig(token);
  const response = await axios.post(
    `${BASE_URL}/posts/${postId}/repost`,
    {},
    config
  );
  return response;
}

async function getUserById(token, userId) {
  const config = createConfig(token);
  const response = await axios.get(`${BASE_URL}/user/${userId}`, config);
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
  readComments,
  postComment,
  verifyFollow,
  follow,
  unfollow,
  getUserId,
  repost,
  getUserById,
};
