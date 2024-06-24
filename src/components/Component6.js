import React from "react";
import "./Our_products.css"
import { component6Data } from "./data/Component6Data";

const Component6 = () => {
    return(
        <div className="component-6">
            <div className="products">
                <div>
                    <h1 className="h1-our-product"> Our Special Thali's </h1>
                </div>
                    <div className="product-gallery">
                        <div className="product-gallery-row">
                        {component6Data.map((item, index)=>{
                            return (
                                <div className="product-item">
                                <div className="product-image" id={item.imageid}></div>
                                <div className="product-down-part">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <div className="order-details">
                                        <h3 className="product-price">{item.price}</h3>
                                       <a target='_blank' href={`https://wa.me/9896355570?text=I want To order ${item.name}`}><button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Order Now</button></a> 
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
export default Component6