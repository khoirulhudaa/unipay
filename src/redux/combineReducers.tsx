// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const rootReducer = combineReducers({
    authSlice,
});

export default rootReducer;
