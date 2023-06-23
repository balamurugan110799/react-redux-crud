import { configureStore } from "@reduxjs/toolkit";
import usersReducer from  "./slice"
export default configureStore({
    reducer: {
      users: usersReducer,
    },
  });