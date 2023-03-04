import { configureStore } from '@reduxjs/toolkit';
import propertyApi from '../feature/api/apiSlice';
import floorSlice from '../feature/floorSlice/floorSlice';
import propertySlice from '../feature/propertySlice/propertySlice';

 const store = configureStore({
  reducer: {
    [propertyApi.reducerPath] : propertyApi.reducer,
    property: propertySlice,
    floor: floorSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(propertyApi.middleware)
})

export default store;