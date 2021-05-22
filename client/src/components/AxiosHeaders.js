import axios from 'axios';
export default function setAxiosDefaultHeaders() {
    const API = "https://myfirstw3bsite.herokuapp.com/"
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.baseURL = API;
  axios.defaults.headers.post.Accept = 'application/json';
}
