import { createSlice } from "@reduxjs/toolkit";

//events cart
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: null,
    tokenExpirationDate: null,
    loaded: false,
  },
  reducers: {
    login(state, action) {
      const {
        user,
        token,
        expDate = new Date(
          new Date().getTime() + 1000 * 60 * 60 * 24 * 7
        ).toISOString(),
      } = action.payload;

      const tokenExpirationDate = expDate;

      state.token = token;
      state.user = user;
      state.tokenExpirationDate = tokenExpirationDate;

      localStorage.setItem(
        "userData",
        JSON.stringify({
          user: user,
          token: token,
          expiration: tokenExpirationDate,
        })
      );
    },

    logout(state, action) {
      (state.user = {}),
        (state.token = null),
        (state.tokenExpirationDate = null);
    },
    setLoaded(state, action) {
      state.loaded = true;
    },
  },
});

export default authSlice;
