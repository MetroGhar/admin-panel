import propertyApi from "../apiSlice";

const getLeadData = propertyApi.injectEndpoints({
    endpoints: (builder) => ({
        getLeadData: builder.query({
          query: () => `/admin/leads`,
        }), 
        getLeadDataById: builder.query({
          query: ({addlead}) => `/admin/lead/${addlead}`,
        }) 
      }),
})

export const {useGetLeadDataQuery,useGetLeadDataByIdQuery} = getLeadData;