import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import trainingDayModalSlice from './trainingDayModalSlice';
import userSlice from './userSlice';


export const store = configureStore({
  reducer: {
    trainingDayModal: trainingDayModalSlice,
    user: userSlice
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;