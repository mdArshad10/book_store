import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASIC_URL } from "../utils/basicURL.js";

const baseQuery = fetchBaseQuery({
  baseUrl: BASIC_URL,
  Credential: true,
  prepareHeaders: (Headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      Headers.set("Authorization", `Bearer ${token}`);
    }
    return Headers;
  },
});

export const basicApi = createApi({
  reducerPath: "book_store",
  baseQuery,
  tagTypes: ["Books"],
  keepUnusedDataFor: 30,
  endpoints: () => ({}),
});


