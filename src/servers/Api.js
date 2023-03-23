import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: `https://dummyjson.com`,
});

const fetchUsers = createAsyncThunk("fetchUsers", async (skip) => {
  try {
    const response = await instance.get(`/users?limit=10&skip=${skip}`);
    return response.data.users;
  } catch (error) {
    console.error(error);
  }
});

export default fetchUsers;

// ********** kullanabileceğimiz 2. api adresi **************

// const instance = axios.create({
//   baseURL: `https://randomuser.me/api/`,
// });

// const fetchUsers = createAsyncThunk("fetchUsers", async (page) => {
//   try {
//     const response = await instance.get(`?page=${page}&results=10`);
//     return response.data.results;
//   } catch (error) {
//     console.error(error);
//   }
// });

// export default fetchUsers;
