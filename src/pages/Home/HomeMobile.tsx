import React from "react";
import useData from "../../Hook/useData";
import { ProductModelType } from "../../redux/reducers/productReducer";
import ProductCard from "../../components/ProductCard";

const HomeMobile = () => {
    const { data } = useData();

    return (
        <div className="container mx-auto">
            <h3>Danh sách sản phẩm</h3>
            <div className="grid grid-cols-1 gap-3">
                {data.map((item: ProductModelType) => {
                    return <ProductCard product={item} />;
                })}
            </div>
        </div>
    );
};

export default HomeMobile;
