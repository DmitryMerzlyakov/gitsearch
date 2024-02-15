import React, { useCallback } from "react";
import axios from "axios";
import { IUserDetails } from "./interface";

const GITHUB_API = "https://api.github.com";

const axiosInstance = axios.create({
  baseURL: `${GITHUB_API}`,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  },
});

export async function useFetch(url: string) {
  try {
    const response = await axiosInstance.get(`${url}`, {});
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
