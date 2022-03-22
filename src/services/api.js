import axios from "axios";

const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://linkr-back.herokuapp.com";

async function createUser(user) {
  await axios.post(`${BASE_URL}/sign-up`, user);
}

export const api = { createUser };
