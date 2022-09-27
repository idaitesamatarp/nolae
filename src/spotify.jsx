import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "5402290a62934d299f9a3e0465d8ce9c";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialogue=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async (config) => {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
