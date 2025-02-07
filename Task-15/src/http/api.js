import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

export const getAPI = async (url, cb) => {
  return await axiosInstance.get(url).then((responce) => {
    cb(responce.data);
  });
};
