import {basicAPi} from '../../basicApi.js'

export const bookApi = basicAPi.injectEndpoints({
  endpoints: (build) => ({
    example: build.query({
      query: () => "test",
    }),
  }),
});

export const { useExampleQuery } = bookApi;