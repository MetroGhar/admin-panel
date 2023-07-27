import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://13.127.219.251/api/v1",
  }),
  endpoints: (builder) => ({}),
});

export default propertyApi;
