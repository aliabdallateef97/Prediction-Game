import themeSlice from './slices/ThemeSlice';
import { combineReducers } from '@reduxjs/toolkit';
import AuthSlice from '@/sections/redux/slice/authSlice';
import gameSlice from '@/sections/redux/slice/gameSlice';



  let reducer = combineReducers({
    theme: themeSlice,
    auth:AuthSlice,
    game:gameSlice
  });
  
  export const rootReducer =  reducer;