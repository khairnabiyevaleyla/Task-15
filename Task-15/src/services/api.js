import axios from "axios";
export const AxiosInstance = axios.create({
  baseURL: "https://eke.testapp.az",
  timeout: 10000,
});

export const api = {
  devApi: {
    baseUrl: "http://localhost:1337/api",
    collectionbyproducts: "collectionbyproducts",
    collectionbycategories: "collectionbycategories",
    collectionbytypes: "collectionbytypes",
    bestsellerproducts: "bestsellerproducts",
    trendingproducts: "trendingproducts",
    products: "products",
    blogs: "blogs",
    tags: "tags",
  },
};

export const AuthApi = async (url, payload) => {
  try {
    const response = await AxiosInstance.post(url, payload);
    return response.data;
  } catch (err) {
    console.error("Ошибка запроса:", err);
    throw err; // Бросаем ошибку, чтобы её можно было обработать в `Login.jsx`
  }
};
