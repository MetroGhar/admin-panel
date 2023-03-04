import propertyApi from "../apiSlice";

const deletePropertyApi = propertyApi.injectEndpoints({
    endpoints: (builder) => ({
        deletePropertyApi: builder.mutation({
          query: (id) => ({
            method: "DELETE",
            url: `/admin/project/${id}`,
          }),
        }),
      }),
})

export const { useDeletePropertyApiMutation } = deletePropertyApi;
