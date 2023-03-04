import propertyApi from "../apiSlice";

const careerApi = propertyApi.injectEndpoints({
    endpoints: (builder) => ({
        getCareerData: builder.query({
          query: () => `/admin/job/list`,
        }),
        deleteCareerData: builder.mutation({
          query: ({delId}) => ({
            method: "DELETE",
            url: `/admin/job/delete/${delId}`,
          }),
        }),
      }),
})

export const {useGetCareerDataQuery,useDeleteCareerDataMutation} = careerApi;