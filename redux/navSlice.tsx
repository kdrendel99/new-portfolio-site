import { createSlice } from "@reduxjs/toolkit"
// import { AppState } from "./store";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper"
// import { SCROLL_ELEMENTS } from "@/pages/_app";
import { SCROLL_ELEMENTS } from "@/enums/scroll-elements.enum";


export interface NavState {
  navState: SCROLL_ELEMENTS
}
const initialState: NavState =  {
  navState: SCROLL_ELEMENTS.NONE
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setNavState(state, action) {
      state.navState = action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.nav,
      };
    },
  },
});

export const { setNavState } = navSlice.actions;

export const selectNavState = (state: AppState) => state.nav.navState;

export default navSlice.reducer;
