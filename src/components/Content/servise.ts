import React from "react";
import axios from "axios";
import { IUser } from "./interface";

const GITHUB_API = "https://api.github.com";

const axiosInstance = axios.create({
  baseURL: `${GITHUB_API}`,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

export const useFetch = (url: string, userLogin?: string) => {
  const [data, setData] = React.useState<IUser[]>([]);

  const fetchUsers = React.useCallback(async () => {
    try {
      const response = await axiosInstance.get(`${url}`, {
        params: {
          q: userLogin,
          sort: "repositories",
          order: "desc",
          per_page: 30,
          page: 1,
        },
      });
      setData(response?.data.items);
    } catch (error) {
      console.error(error);
    }
  }, [userLogin]);

  fetchUsers();

  return data;
};
