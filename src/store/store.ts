import { configureStore } from '@reduxjs/toolkit';
import siteRenders from './conditions'

const store:any = configureStore({
  reducer: {
    toggleSite: siteRenders
  },
});

export default store;
