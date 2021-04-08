import API from "./api";

export const getMyProfile = async () => {
  try {
    const res = await API.get("/profile/me");
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getProfileUser = async (id) => {
  try {
    const res = await API.get(`/profile/${id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const createProfile = async (formData) => {
  try {
    const res = await API.post("/profile", formData);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const editProfile = async (formData) => {
  try {
    const res = await API.put("/profile", formData);
    return res.data;
  } catch (err) {
    throw err;
  }
};
