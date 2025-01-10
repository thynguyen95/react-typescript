import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";

export const store = configureStore({
    reducer: {
        number: (state: number = 1) => state,
        productReducer,
    },
});

/*
    getState: 
    + Là phương thức của store do configureStore tạo ra.
    + trả về toàn bộ trạng thái hiện tại của Redux Store(kiểu của object reducer)
*/
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
export type GetStateMethodType = typeof store.getState;
