import React, {useState, useEffect} from 'react';
import '../../styles/Slider.scss';

const slides = [
    'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672331305/NetflixApp/tilapia_fish_g0ozkn.jpg',
    'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672324456/NetflixApp/cheeseless_pizza_bkuecz.jpg',
    'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672323737/NetflixApp/chiken_shawarma_c0ysna.jpg'
];

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const timeChange = 5000;

    useEffect(() => {
        const interval = setInterval(() => {
           setCurrentIndex(currentIndex => {
            if(currentIndex + 1 > slides.length -1){
                return 0;
            }else{
                return currentIndex + 1;
            }
           });
        },timeChange);
        
        return () => clearInterval(interval);
    }, []);

    return(
        <div className='slider' >
                <img src={`${slides[currentIndex]}`} className='slide' alt="carousel" />
        </div>
    )

}

export default Slider;