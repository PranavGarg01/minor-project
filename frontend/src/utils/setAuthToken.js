import API from "../api/api";

const setAuthToken = (token) => {
  if (token) {
    // Apply to every request
    API.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    // Delete auth header
    delete API.defaults.headers.common["x-auth-token"];

    localStorage.removeItem("token");
  }
};

export default setAuthToken;
