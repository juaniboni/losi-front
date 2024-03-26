

import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const customerPersistConfig = {
  key: "customer",
  storage,
};

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    user: null, // Initially, user is not logged in
    token: null, // Initially, no token
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

const persistedCustomerReducer = persistReducer(
  customerPersistConfig,
  customerSlice.reducer
);

export const { setUser, clearUser } = customerSlice.actions;

export default persistedCustomerReducer;
