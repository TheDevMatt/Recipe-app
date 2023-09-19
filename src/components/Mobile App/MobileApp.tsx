import React from 'react';
import img from '../images/MobileApp.png';
import '../../styles/MobileApp.scss';

const MobileApp = () => {
    return(
        <div className='mobile-app'>
            <div className='mobile-app-text'>
            <h2 className='mobile-app-heading'>Get the app</h2>
            <p className='mobile-app-paragraph'>Get the most of our services by downloading our Mobile App both on iOS and Android. Download our app today to access a world of culinary delights at your fingertips. Browse our mouthwatering menu, place your orders with ease, and enjoy quick and secure payments, all from the comfort of your smartphone.</p>
            <p><strong>With us limits doesn't exist.</strong></p>
            </div>
            <img src={img} className='mobile-app-image' alt="Mobile app" />
        </div>
    )
}

export default MobileApp;