import axios from 'axios';
import { API } from '../constants';
export default function setAxiosDefaultHeaders() {
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = API;
  axios.defaults.headers.post.Accept = 'application/json';
}
