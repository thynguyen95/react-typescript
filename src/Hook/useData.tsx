import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../redux/store";
import { getAllProductApi } from "../redux/reducers/productReducer";

const useData = () => {
    const { arrProduct } = useSelector(
        (state: RootState) => state.productReducer
    );
    const dispatch: DispatchType = useDispatch();

    const getAllProduct = async () => {
        // dispatch action thunk
        const actionAsync = getAllProductApi();
        dispatch(actionAsync);
    };

    useEffect(() => {
        getAllProduct();
    }, []);
    return { data: arrProduct };
};

export default useData;
