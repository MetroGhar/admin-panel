import propertyApi from "../apiSlice";

const getPropertyData = propertyApi.injectEndpoints({
    endpoints: (builder) => ({
        getPropertyData: builder.query({
          query: ({currentPage,dataPerPage}) => `/admin/projects?page=${currentPage}&limit=${dataPerPage}`,
        }) 
      }),
})

export const {useGetPropertyDataQuery} = getPropertyData;