import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";


function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"
                src="https://lineardesign.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg"
                alt=""
                />

                <div>
                    <h2 className="checkout__title">Your Shopping
                    Basket</h2>
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    {/*BasketItem*/}
                    

                </div>
            </div>
            
            <div className="checkout__right">
            <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
