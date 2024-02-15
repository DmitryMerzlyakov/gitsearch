import React, { useCallback } from "react";
import axios from "axios";
import { IUserDetails } from "./interface";

const GITHUB_API = "https://api.github.com";

const axiosInstance = axios.create({
  baseURL: `${GITHUB_API}`,
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
});

export const useFetch = (url: string) => {
  const [data, setData] = React.useState<IUserDetails>();

  const fetchUser = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`${url}`, {});
      setData(response?.data);
    } catch (error) {
      console.error(error);
    }
  }, [url]);

  url ? fetchUser() : "";

  return data;
};
