import axios from "axios";

const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://linkr-back.herokuapp.com";

async function createUser(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

async function login(user) {
  const response = await axios.post(`${BASE_URL}/`, user);
  return response.data;
}

async function validateSession(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${BASE_URL}/`, config);
  return response.data;
}

export const api = { createUser, login, validateSession };
