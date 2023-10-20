import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import sliderImage from '../assets/img/slider.png';

const SliderSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    
    const slides = [
        {
          image: sliderImage,
          text: 'Slide 1 Text',
        },
        {
          image: sliderImage,
          text: 'Slide 2 Text',
        },
        {
          image: sliderImage,
          text: 'Slide 3 Text',
        },
    ];

    return(
        <>
        <Slider {...settings}>
            {slides.map((slide, index) => (
                <div key={index} className="relative">
                <div className="h-64 md:h-96 lg:h-[500px]">
                    <img
                    src={slide.image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded">
                    {slide.text}
                </div>
                </div>
            ))}
            </Slider>
        </>
    )
}

export default SliderSection;