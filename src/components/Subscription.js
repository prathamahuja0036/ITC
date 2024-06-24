import React from 'react'
import "./Subscription.css"

const Subscription = () => {
    return (
        <>
            {/* <div className='sub-container'>

                <div className='monthly'>
                    <h1>Monthly Plan</h1>
                    <ul>
                        <li>Includes Lunch and Dinner</li>
                        <li>Get 60 Thali's</li>
                        <li>Free Delivery</li>
                    </ul>
                    <div className='price_of_subs'>
                      <div className='cancel-price'>Rs.6000</div>
                       <div className='final-price'>Rs.4800</div>
                    </div>
                    <button className="order-now-button" ><span><i class="fa-solid fa-cart-shopping"></i></span>Subscribe Now</button>
                </div>

                <div className='Days15'>
                    <h1>15 Days Plan</h1>
                    <ul>
                        <li>Includes Lunch and Dinner</li>
                        <li>Get 30 Thali's</li>
                        <li>Free Delivery</li>
                    </ul>
                    <div className='price_of_subs'>
                      <div className='cancel-price'>Rs.6000</div>
                       <div className='final-price'>Rs.4800</div>
                    </div>
                    <button className="order-now-button" ><span><i class="fa-solid fa-cart-shopping"></i></span>Subscribe Now</button>
                </div>

                <div className='Weakly'>
                    <h1>Weekly Plan</h1>
                    <ul>
                        <li>Includes Lunch and Dinner</li>
                        <li>Get 14 Thali's</li>
                        <li>Free Delivery</li>
                    </ul>
                    <div className='price_of_subs'>
                      <div className='cancel-price'>Rs.6000</div>
                       <div className='final-price'>Rs.4800</div>
                    </div>
                    <button className="order-now-button" ><span><i class="fa-solid fa-cart-shopping"></i></span>Subscribe Now</button>
                </div>

            </div> */}
    <div class="plans-container">
        <div class="plan-box">
            <h2>Monthly Plan</h2>
            <p>Enjoy delicious meals every day for a month.</p>
            <p>Price: Rs-4800</p>
            <a target='_blank' href={`https://wa.me/9896355570?text=I want Monthly Subscription`}><button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Subscribe Now</button></a>
        </div>
        <div class="plan-box">
            <h2>15 Days Plan</h2>
            <p>Perfect for a short-term commitment to healthy eating.</p>
            <p>Price: Rs-2700</p>
            <a target='_blank' href={`https://wa.me/9896355570?text=I want 15 Days Subscription`}><button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Subscribe Now</button></a>
        </div>
        <div class="plan-box">
            <h2>Weekly Plan</h2>
            <p>Great for trying out our service for a week.</p>
            <p>Price: Rs-1400</p>
            <a target='_blank' href={`https://wa.me/9896355570?text=I want Weekly Subscription`}><button className="order-now-button"><span><i class="fa-solid fa-cart-shopping"></i></span>Subscribe Now</button></a>
        </div>
    </div>



        </>
    )
}

export default Subscription