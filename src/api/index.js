import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://66602fff5425580055b2ae87.mockapi.io",
});

mainUrl.interceptors.request.use((req) => {
  let token = localStorage.getItem("token");
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export default mainUrl;
