import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook , useDispatch ,useSelector } from "react-redux";
import cryptoReducer from '../features/cryptoSlice'

export const store = configureStore({
    reducer:{
        crypto : cryptoReducer,
    }
})

// Types for your entire Redux state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom Typed Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;