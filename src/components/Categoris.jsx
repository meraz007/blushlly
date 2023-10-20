import latestFour from '../assets/img/latestFour.png';
import latestOne from '../assets/img/latestOne.png';
import latestTwo from '../assets/img/latestTwo.png';
import latestThree from '../assets/img/latestThree.png';
import popularOne from '../assets/img/popularOne.png';

const Categories = () => {
    const images = [
        {
            image: latestOne,
            text: 'SKIN'
        },
        {
            image: latestTwo,
            text: 'HAIR'
        },
        {
            image: latestThree,
            text: 'MAKEUP'
        },
        {
            image: popularOne,
            text: 'TIPS'
        },
        {
            image: latestFour,
            text: 'SPA'
        },
    ]
    return(
        <>
        <div className='flex flex-wrap -m-4'>
            {images.map((img,index) => (
                <div key={index} className='w-full md:w-1/5 p-4'>
                    <div class="relative h-40 bg-cover bg-center" style={{ backgroundImage: `url(${img.image})` }}>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="flex items-center justify-center w-full h-full bg-[#1D1A1A] bg-opacity-60 p-4 text-white text-center">
                                <p class="cursor-pointer font-normal text-xs text-white border border-white rounded-[17px] py-2 px-6">{img.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Categories;