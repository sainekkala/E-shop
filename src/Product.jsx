import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product ({id, title, image, price, rating}) {
    const [state, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="product">
                    <div className="product_info">
                        <p>{title}</p>
                        <p className="product_price">
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>
                        <div className="product_rating">
                            {Array(rating)
                            .fill()
                            .map((_,i) => (
                                <p key={i}>⭐</p>
                            ))}
                        </div>
                    </div>
                    <img src={image}  alt="image" className="product_image"/>
                    <button className="product_button" onClick={addToBasket}>Add To Cart</button>
                </div>
            </div>
        </div>
        </>
    )
};

export default Product;