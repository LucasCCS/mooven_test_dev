import axios from 'axios';
import {store} from '../store';
import rateLimit from "axios-rate-limit";

export const Api = rateLimit(
  axios.create({
    baseURL:
      "https://cors-anywhere.herokuapp.com/http://api.github.com/",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }),
  { maxRequests: 2, perMilliseconds: 1500, maxRPS: 2 }
);

Api.interceptors.request.use(
  config => {
    if (store.getState().user.token !== null)
      config.headers["Authorization"] = `Token ${store.getState().user.token}`;
    return config;
  },
  error => Promise.reject(error)
);

export const AuthApi = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://github.com/",
});