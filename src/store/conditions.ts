import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sideBar:false,
    notifyBar:false,
    theme:false
}


const siteRender = createSlice({
  name: 'siteControl',
  initialState,
  reducers: {
    toggleSidebar:(state) => {

      state.sideBar = !state.sideBar
    },
    setSidebarbar:(state) => {
        state.sideBar = true
    },
    toggleNotifybar:(state) => {
        state.notifyBar = !state.notifyBar
    },
    setNotifybar:(state) => {
        state.notifyBar = true
    },
    toggleTheme:(state) => {
        state.theme = !state.theme
    }
  }
});

export const {toggleNotifybar, setSidebarbar, setNotifybar, toggleSidebar,  toggleTheme} = siteRender.actions

export default siteRender.reducer; 