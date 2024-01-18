import { IUser } from "../../../models";
import { apiSlice } from "../../api/apiSlice";

export interface ILoginInput {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  user: IUser;
}

export interface IRegisterInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<ILoginResponse, ILoginInput>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...credentials }
      })
    }),
    register: builder.mutation<unknown, IRegisterInput>({
      query: (credentials) => ({
        url: "/auth/register",
        method: "POST",
        body: { ...credentials }
      })
    }),
  })
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;