import React from "react";
import "./Footer1.css"

const Footer1 =() => {
    return(
        <>
            <div className="footer">
                <div className="footer-section-1">
                    <div className="footer-heading">Follow Us On</div>
                    <div className="footer-searchbar">
                        <input className="search-bar-input-box-footer" type="text" placeholder="Your Email"></input>
                        <button className="search-button-footer">Subscribe Now</button>
                    </div>
                    <div className="footer-icons">
                     <a href="https://www.instagram.com/indianthalicompany/?igsh=dnlsMThnbnQydjM4"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.facebook.com/indianthalicompany?mibextid=ZbWKwL"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://wa.me/message/5YH5SMQB6VNMF1"><i class="fa-brands fa-whatsapp"></i></a>
                    
                    </div>
                </div>
                 <hr/>

                 <div className="footer-section-2">
                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Why People Like us!</h2></li>
                            <li><a>Home Chefs and Fresh Ingredients</a></li>
                            <li><a>Small Portions, No Additives</a></li>
                            <li><a>Convenience of Delivery</a></li>
                            <li><a>Emphasis on Cleanliness and Health</a></li>
                            <li><a>Commitment to Customer Satisfaction</a></li>
                         </ul>
                    </div>

                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Shop Info</h2></li>
                            <li><a>About Us</a></li>
                            <li><a>Contact Us</a></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>Terms & Conditions</a></li>
                            <li><a>Return Policy</a></li>
                            <li><a>FAQs & Help</a></li>
                        </ul>
                    </div>

                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Account</h2></li>
                            <li><a>My Account</a></li>
                            <li><a>Shop Details</a></li>
                            <li><a>Shopping Cart</a></li>
                            <li><a>Wishlist</a></li>
                            <li><a>Order History</a></li>
                            <li><a>International Orders</a></li>
                        </ul>
                    </div>

                    <div className="footer-section-2-first">
                        <ul>
                            <li><h2>Contact</h2></li>
                            <li><a>Address : Hisar,Haryana</a></li>
                            <li><a>125001</a></li>
                            <li><a>Email: Indianthalicompany@gmail.com</a></li>
                            <li><a>Phone: +91 9896355570 </a></li>
                            <li><a>Payment Accepted</a></li>
                        </ul>
                    </div>
                 </div>

                 <div className="footer-section-3">
                    <button>Read More</button>
                 </div>

                 <div className="footer-section-4">
                    <div className="footer-end-1"><span>ITC</span>,All Rights Reserved</div>
                    <div className="footer-end-2">Indian Thali Company</div>
                 </div>


            </div>
        </>
    )
}

export default Footer1