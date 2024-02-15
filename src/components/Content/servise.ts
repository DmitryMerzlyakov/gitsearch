import axios from "axios";

const GITHUB_API = "https://api.github.com";

const axiosInstance = axios.create({
  baseURL: `${GITHUB_API}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export async function useFetch(userLogin?: string) {
  try {
    const response = await axiosInstance.get("/search/users", {
      params: {
        q: userLogin,
        sort: "repositories",
        order: "desc",
        per_page: 30,
        page: 1,
      },
    });
    return response?.data.items;
  } catch (error) {
    console.error(error);
  }
}
