import React from 'react'
import './About-us.css'
import chef from '../Images/chefcooking.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className='about-container'>

                <div className='content-left'>
                    <h1>Indian Thali Company</h1>
                    <p>ITC deliver 100% Fresh, Home Cooked  and Balanced Nutritional Meals. Usually Restaurants Prepare Food Items High In Fat, Salt, And Sugar.When We Prepare Food ,We Know Which ingredients And how much is going into our food which helps to keep stress levels low for our health.Freshly Cooked Food A Significant Concern Of Eating Home Food During Work .We Have A Way For You. We Have  Different Plans Of Meals For People Who Stay Away From Home for Short Periods  Or Long Periods.</p>
                </div>
{/* 
                <div className='content-right'>
             <img src={chef}></img>
                </div> */}
            </div>
        </div>
    )
}

export default AboutUs