import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

const http = {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};

// request , response

axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);
axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject();
  }
);

export default http;
