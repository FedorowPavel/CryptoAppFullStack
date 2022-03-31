import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {User} from "../models/User";
import {CreateUserRequestDto} from "../dto/create-user.request.dto";

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `/users`
  }),
  endpoints: (build) => ({
    createUser: build.mutation<User, CreateUserRequestDto>({
      query: (dto) => ({
        url: '/',
        method: "POST",
        body: dto
      })
    })
  })
})



// endpoints: (build) => ({
//   fetchAllPosts: build.query<IPost[], number>({
//     query: (limit = 5) => ({
//       url: `/posts` ,
//       params: {
//         _limit: limit
//       }
//     }),

