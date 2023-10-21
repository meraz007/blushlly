import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliderImage from '../assets/img/slider.png';
import ArrowRight from '../assets/svg/ArrowRight.svg';
import SliderNext from '../assets/svg/SliderNext.svg';
import SliderPrev from '../assets/svg/SliderPrev.svg';


    const PrevArrow = ({ onClick }) => (
        <div 
            className="absolute top-1/2 transform -translate-y-1/2 left-4 p-2 cursor-pointer" onClick={onClick}
        >
            <img src={SliderPrev} alt="" />
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div 
            className="absolute top-1/2 transform -translate-y-1/2 right-4 p-2 cursor-pointer" onClick={onClick}
        >
            <img src={SliderNext} alt="" />
        </div>
  );
  
  
const SliderSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    
    const slides = [
        {
          image: sliderImage,
          category: 'SKIN',
          title: 'Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat',
          author: 'By Sarfraz Jasim',
          date: '29 July, 2023'
        },
        {
          image: sliderImage,
          category: 'HAIR',
          title: 'Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat',
          author: 'By Sarfraz Jasim',
          date: '29 July, 2023'
        },
        {
          image: sliderImage,
          category: 'TIPS',
          title: 'Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat',
          author: 'By Sarfraz Jasim',
          date: '29 July, 2023'
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
                <div className="absolute top-1/2 right-[100px] transform max-w-[500px] -translate-y-1/2 text-white text-white p-2 rounded">
                    <div className='border border-white py-8 px-16'>
                        <span className='font-normal text-xs border-b'>{slide.category}</span>
                        <h4 className='mt-5 font-medium text-[32px] leading-10 '>{slide.title}</h4>
                        <p className='mt-5 font-normal text-sm'>{slide.description}</p>
                        <p className='mt-3 font-medium text-xs '><span>{slide.author}</span>- <span>{slide.date}</span></p>
                        <button className='flex items-center gap-3 border-b py-2 mt-4'>
                            <span>Continue Reading</span>
                            <img src={ArrowRight} alt="" />
                            <div></div>
                        </button>
                    </div>
                    {slide.text}
                </div>
                </div>
            ))}
            </Slider>
        </>
    )
}

export default SliderSection;