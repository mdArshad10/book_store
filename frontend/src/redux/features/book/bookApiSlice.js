import { basicApi } from "../../basicApi.js";

const bookApiSlice = basicApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => ({
        url: "books",
        method: "GET",
        keepUnusedDataFor: 5,
      }),
      providesTags: ["Books"],
    }),
    createBook: build.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: build.mutation({
      query: ({ id, ...data }) => ({
        url: `books/edit/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: build.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
    getBook: build.query({
      query: (id) => ({
        url: `books/${id}`,
        method: "GET",
      }),
      providesTags: ["Books"],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useCreateBookMutation,
  useGetBookQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApiSlice;
