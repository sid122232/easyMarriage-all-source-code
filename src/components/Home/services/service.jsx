import React from 'react'
import '../services/services.css'
import Service1 from '../../../assets/service-1.jpg'
import Service2 from '../../../assets/pandits.jpg'
import Service3 from '../../../assets/venuess.jpg'
import Service4 from '../../../assets/makeupService.jpg'
import Service5 from '../../../assets/photographerService.jpg'
import Service6 from '../../../assets/FoodService.jpg'

function Service() {
    return (
        <>
      
        
        <div className="services">
            <div className="service">
                <img src={Service1} alt="" />
                <div className="caption">
                    <h1>Music Band</h1>
                    <p>Add rhythm to your events with live performances by our talented music bands. Make every moment unforgettable</p>
                   <button>Explore Band</button>
                   
                </div>
            </div>
            <div className="service ">
                <img src={Service2} alt="" />
                <div className="caption">
                    <h1>Priests (Pandits)</h1>
                    <p>Perform your rituals with guidance from experienced priests. We bring spirituality and tradition to your doorstep</p>
                   <button>Schedule a Puja</button>
                   
                </div>
            </div>
            <div className="service">
                <img src={Service3} alt="" />
                <div className="caption">
                    <h1>Venues</h1>
                    <p> From intimate settings to grand halls, we have the perfect place for your dream wedding.</p>
                   <button>Explore Venues</button>
                   
                </div>
            </div>
          
        </div>




        <div className="services">
            <div className="service">
                <img src={Service4} alt="" />
                <div className="caption">
                    <h1>Makeup</h1>
                    <p>Enhance your natural beauty with our professional makeup artists.</p>
                   <button>Get a Makeup Artist</button>
                   
                </div>
            </div>
            <div className="service ">
                <img src={Service5} alt="" />
                <div className="caption">
                    <h1>Photographers</h1>
                    <p>Capture every moment of your wedding day with our skilled photographers</p>
                   <button>Hire a Photographer</button>
                   
                </div>
            </div>
            <div className="service">
                <img src={Service6} alt="" />
                <div className="caption">
                    <h1>Food</h1>
                    <p> From fine dining to delightful treats, our curated menu ensures a memorable culinary experience for everyone.   </p>
                   <button>View Menus</button>
                   
                </div>
            </div>
          
        </div>
            </>
    )
}

export default Service
