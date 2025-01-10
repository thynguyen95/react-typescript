import { Button, Card } from "flowbite-react";
import React from "react";
import { ProductModelType } from "../redux/reducers/productReducer";
import { NavLink } from "react-router-dom";
import { RelatedProduct } from "../Model/ProductDetailModelType";

type Props = {
    product: ProductModelType | RelatedProduct;
};

// Khi sử dụng thẻ ProductCard phải khai báo type của props
const ProductCard = (props: Props) => {
    let { product } = props;
    return (
        <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={product.image}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {product.price}
            </p>
            <Button>
                <NavLink to={`/detail/${product.id}`}>View detail</NavLink>
            </Button>
        </Card>
    );
};

export default ProductCard;
