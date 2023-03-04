import propertyApi from "../apiSlice";

const approvedApi = propertyApi.injectEndpoints({
    endpoints: (builder) => ({
      approvedApi: builder.mutation({
          query: (id) => ({
            method: "PUT",
            url: `/admin/approve/project/${id}`,
          }),
        }),
      }),
})

export const { useApprovedApiMutation } = approvedApi;
