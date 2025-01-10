import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DispatchType, RootState } from "../../redux/store";
import { getDetailProductActionApi } from "../../redux/reducers/productReducer";
import { Button } from "flowbite-react";
import ProductCard from "../../components/ProductCard";
import { RelatedProduct } from "../../Model/ProductDetailModelType";

type Props = {};

const Detail = (props: Props) => {
    const params = useParams();
    const { id } = params;
    console.log("id: ", id);

    const { detailProduct } = useSelector(
        (state: RootState) => state.productReducer
    );
    console.log("detailProduct: ", detailProduct);

    const dispatch: DispatchType = useDispatch();

    const getDetailProduct = async () => {
        const actionAsync = getDetailProductActionApi(id as string);
        dispatch(actionAsync);
    };

    useEffect(() => {
        getDetailProduct();
    }, [id]);

    return (
        <div className="container mx-auto">
            <h2>Detail</h2>

            <div className="flex justify-between">
                <div className="w-1/3">
                    <img src={detailProduct?.image} alt="" />
                </div>
                <div className="w-2/3">
                    <p>{detailProduct?.name}</p>
                    <p>{detailProduct?.description}</p>
                    <p>{detailProduct?.price}</p>

                    <div className="flex gap-2">
                        {detailProduct?.size.map((size, index: number) => {
                            return <Button key={index}>{size}</Button>;
                        })}
                    </div>
                </div>
            </div>

            <h2>Sản phẩm liên quan</h2>
            <div className="grid grid-cols-3 gap-4">
                {detailProduct?.relatedProducts.map(
                    (item: RelatedProduct, index: number) => {
                        return <ProductCard key={item.id} product={item} />;
                    }
                )}
            </div>
        </div>
    );
};

export default Detail;
