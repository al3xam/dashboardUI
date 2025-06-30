import { configureStore, type ThunkAction, type Action } from "@reduxjs/toolkit";
import globalSlice from "./slices/global.slices";
import api from "../api/globals.api";

import { errorMiddleware } from "../services/errorMiddleware.service.ts";

const store = configureStore({
  reducer: {
    app: globalSlice,
    [api.reducerPath]: api.reducer,
  },
middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			api.middleware,
			errorMiddleware
		),  
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
