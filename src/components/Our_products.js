import React from "react";
import "./Our_products.css"

import { productsData } from "./data/ProductsData";
const Our_products = () => {
    console.log("products data=>",productsData)
    return(
        <div className="component-4">
            <div className="products">
                <div>
                    <h1 className="h1-our-product">Our Products</h1>
                </div>
                    <div className="product-gallery">
                        <div className="product-gallery-row">
                           {productsData.map((item, index)=>{
                            return (
                                <div className="product-item">
                                <div className="product-image" id={item.imageid}></div>
                                <div className="product-down-part">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <div className="order-details">
                                        <h3 className="product-price">$ {item.price}</h3>
                                        <a href="https://wa.me/message/5YH5SMQB6VNMF1"><button className="order-now-button" ><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button></a>
                                    </div>
                                </div>
                            </div>
                            )
                           }) }
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Our_products