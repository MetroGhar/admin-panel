import propertyApi from "../apiSlice";

const getQueryData = propertyApi.injectEndpoints({
    endpoints: (builder) => ({
        getQueryData: builder.query({
          query: () => `/admin/query/list`,
        }),
        getQueryDataById: builder.query({
          query: ({querysent}) => `/admin/query/${querysent}`,
        }),
        getQueryPostData: builder.mutation({
          query: (postData) => ({
            method: "POST",
            url: "/admin/job/add",
            body: {
                postData
            }
          }),
        }),
      }),
})

export const {useGetQueryDataQuery,useGetQueryDataByIdQuery,useGetQueryPostDataMutation} = getQueryData;