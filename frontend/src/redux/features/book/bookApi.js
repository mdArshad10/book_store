import { basicAPi } from "../../basicApi.js";

export const bookApi = basicAPi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => ({
        url: "books",
        method: "GET",
        keepUnusedDataFor: 5,
      }),
      tagTypes: ["Books"],
    }),
    createBook: builder.mutation({
      query: (data) => ({
        url: "books",
        method: "POST",
        body: data,
        keepUnusedDataFor: 5,
      }),
      tagTypes: ["Books"],
    }),
    updateBook: builder.mutation({
      query: (id, data) => ({
        url: `books/edit/${id}`,
        method: "PUT",
        body: data,
      }),
      tagTypes: ["Books"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
