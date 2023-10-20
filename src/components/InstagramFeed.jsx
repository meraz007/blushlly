import SectionTitle from "./SectionTitle";
import Insta from '../assets/img/insta.png';
import PopularOne from '../assets/img/popularOne.png';
import PopularFour from '../assets/img/popularFour.png';
import PopularThree from '../assets/img/popularThree.png';

const InstagramFeed = () => {
    const instagrams = [PopularThree, PopularFour, PopularOne, Insta]
    return(
        <>
        <SectionTitle title={'Instagram Feed'} />
        <div className='flex flex-wrap -m-4'>
            {instagrams.map(post => (
                <div className="w-full sm:w-1/4 p-4">
                    <div className='relative'>
                        <img className='w-full sm:w-[264px] sm:h-[264px]' src={post} alt="" />
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-6">
            <button className="py-3 w-full rounded-[26px] bg-[#1D1A1A] text-white">Follow Us</button>
        </div>
        </>
    )
}

export default InstagramFeed;