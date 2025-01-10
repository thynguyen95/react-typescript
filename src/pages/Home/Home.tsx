// tsrafce
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/store";
import {
    getAllProductApi,
    ProductModelType,
} from "../../redux/reducers/productReducer";
import ProductCard from "../../components/ProductCard";

type Props = {};

const Home = (props: Props) => {
    // state được redux định nghĩa unknow
    // unknow ko thể thực hiện operation
    // để any sẽ lấy được state => ko nên
    const number = useSelector((state: RootState) => state.number);

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

    return (
        <div className="container mx-auto">
            <div>number : {number}</div>

            <h3>Danh sách sản phẩm</h3>
            <div className="grid grid-cols-3 gap-3">
                {arrProduct.map((item: ProductModelType) => {
                    return <ProductCard product={item} />;
                })}
            </div>
        </div>
    );
};

export default Home;
