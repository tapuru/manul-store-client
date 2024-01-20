import { apiSlice } from "../../../shared/api/apiSlice";
import { User } from "../types";

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<LoginResponse, LoginInput>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials }
      })
    }),
    register: builder.mutation<unknown, RegisterInput>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials }
      })
    }),
  })
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;