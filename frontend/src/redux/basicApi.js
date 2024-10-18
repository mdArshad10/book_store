import { createApi } from "@reduxjs/toolkit/query";
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

export const basicAPi = createApi({
  reducerPath: "basicApi",
  baseQuery,
  tagTypes: ["Books"],
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({}),
});
