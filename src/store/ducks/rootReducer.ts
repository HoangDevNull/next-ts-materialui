import { combineReducers } from '@reduxjs/toolkit';
import exampleSlice from './example/slice';

const createRootReducer = () => {
  return combineReducers({
    example: exampleSlice,
  });
};

export default createRootReducer;
