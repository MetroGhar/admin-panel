import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const propertyApi = createApi({
    reducerPath: 'propertyApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://52.66.198.155/api/v1' 
    }),
    endpoints: (builder) => ({ }),
  
  })

  export default propertyApi;