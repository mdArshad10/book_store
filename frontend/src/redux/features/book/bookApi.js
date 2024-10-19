import { basicApi } from "../../basicApi.js";

export const bookApi = basicApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "books",
        method: "GET",
        keepUnusedDataFor: 5,
      }),
      providesTags: ["Books"],
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `books/edit/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    getBook: builder.query({
      query: (id) => ({
        url: `books/${id}`,
        method: "GET",
      }),
      providesTags: ["Books"],
    }),
  }),
});


