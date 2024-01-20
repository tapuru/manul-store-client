import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../app/store";

import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

import { logOut, setCredentials } from "../../features/user/model/userSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_URL}/api`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) =>  {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
  } 
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    console.log("sending refresh token")
    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    console.log(refreshResult);

    if (refreshResult?.data) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }

  return result;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  // tagTypes: ["Category", "Brands"],
  endpoints: () => ({})
});

