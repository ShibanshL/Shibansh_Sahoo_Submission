//this as the name indicate is the redux store

import { configureStore } from '@reduxjs/toolkit';
import siteRenders from './conditions'

const store:any = configureStore({
  reducer: {
    toggleSite: siteRenders
  },
});

export default store;
