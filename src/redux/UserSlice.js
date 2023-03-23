import { createSlice } from "@reduxjs/toolkit";
import fetchUsers from "../servers/Api";

const initialState = {
  data: [],
  status: "idle",
  page: 0,
};

const UserSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    incrementSkip: (state) => {
      state.page += 10; // alternatif api adresi kullanıldığında state.page += 1 şeklinde kullanılacaktır
    },
    decrementSkip: (state) => {
      state.page -= 10; // alternatif api adresi kullanıldığında state.page += 1 şeklinde kullanılacaktır
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default UserSlice.reducer;
export const { incrementSkip, decrementSkip } = UserSlice.actions;
