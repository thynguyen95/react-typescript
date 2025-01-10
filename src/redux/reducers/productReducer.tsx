import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DispatchType, GetStateMethodType } from "../store";
import axios from "axios";
import { ProductDetailModelType } from "../../Model/ProductDetailModelType";

export interface ProductModelType {
    sizes: number[];
    id: number;
    name: string;
    alias: string;
    price: number;
    description: string;
    size: string;
    shortDescription: string;
    quantity: number;
    deleted: boolean;
    categories: string;
    relatedProducts: string;
    feature: boolean;
    image: string;
    imgLink: string;
}

export interface ProductStateType {
    arrProduct: ProductModelType[];
    detailProduct: ProductDetailModelType | null;
}

const initialState: ProductStateType = {
    arrProduct: [],
    detailProduct: null,
};

const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        setArrProductAction: (
            state: ProductStateType,
            action: PayloadAction<ProductModelType[]>
        ) => {
            state.arrProduct = action.payload;
        },
        setProductDetailAction: (
            state: ProductStateType,
            action: PayloadAction<ProductDetailModelType>
        ) => {
            state.detailProduct = action.payload;
        },
    },
});

export const { setArrProductAction, setProductDetailAction } =
    productReducer.actions;

export default productReducer.reducer;

//action async call api get all product
export const getAllProductApi = () => {
    return async (dispatch: DispatchType, getState: GetStateMethodType) => {
        // call api
        const res = await axios({
            url: "https://apistore.cybersoft.edu.vn/api/Product",
            method: "GET",
        });

        // sau khi lấy data từ api về thì dispatch action payload
        const action: PayloadAction<ProductModelType[]> = setArrProductAction(
            res.data.content
        );
        dispatch(action);
    };
};

/*
    1. tạo giao diện detail 
    2. tạo state của productDetail 
    3. tạo actionPayload cho productState
    4. tạo actionAsync cho getDetail api 
    5. bindingState tại detail page 
    6. dispatch actionAsync tại detail page 
*/
export const getDetailProductActionApi = (id: string) => {
    return async (dispatch: DispatchType) => {
        const res = await axios({
            url: `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`,
        });

        // đẩy data lên redux
        const action: PayloadAction<ProductDetailModelType> =
            setProductDetailAction(res.data.content);

        dispatch(action);
    };
};
