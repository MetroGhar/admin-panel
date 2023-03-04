
import propertyApi from "../apiSlice";

const propertyPostApi = propertyApi.injectEndpoints({
  endpoints: (builder) => ({
    propertyPostApi: builder.mutation({
      query: (postData) => ({
        method: "POST",
        url: "/project/add",
        body: {
            postData
        },
        headers: {
            "Content-Type": "multipart/form-data",
          },
      }),
    }),
  }),
});

export const {usePropertyPostApiMutation} = propertyPostApi;