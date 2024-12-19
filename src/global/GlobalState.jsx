import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme : false
}

const GlobalState = createSlice({
  name: "AuthState",
  initialState,
  reducers: {
    themed : (state) => {
        state.theme = !state.theme
    }
  }
});

export const {themed} = GlobalState.actions

export default GlobalState.reducer