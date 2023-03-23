import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../redux/UserSlice";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    data: UserSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
