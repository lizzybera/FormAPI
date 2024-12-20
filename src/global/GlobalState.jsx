import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme : false,
    AuthUserInitialState : null | ""
}

const GlobalState = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    themed : (state) => {
        state.theme = !state.theme
    },
    createUser : (state, {payload}) => {
      state.AuthUserInitialState = payload
    },
    logOut : (state) => {
      state.AuthUserInitialState = null
    }
  }
});

export const {themed, createUser, logOut} = GlobalState.actions

export default GlobalState.reducer