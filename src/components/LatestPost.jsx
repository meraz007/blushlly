import SectionTitle from './SectionTitle';
import LatestOne from '../assets/img/latestOne.png';
import LatestTwo from '../assets/img/latestTwo.png';
import LatestFour from '../assets/img/latestFour.png';
import LatestThree from '../assets/img/latestThree.png';

const LatestPost = () => {
    const posts = [
        {
            category: 'HAIR',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: LatestOne
        },
        {
            category: 'MAKEUP',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: LatestTwo
        },
        {
            category: 'TIPS',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: LatestThree
        },
    ]
    return(
        <>
        <SectionTitle title={'Latest Post'} />
        <div className='flex flex-wrap -m-4'>
            {posts.map(post => (
                <div className="w-full sm:w-1/3 p-4 mb-16 sm:mb-0">
                    <div className='relative'>
                        <img className='w-full' src={post.image} alt="" />
                        <div className='mx-6 gap-2 px-8 text-center py-3 absolute bg-white sm:-bottom-20 -bottom-16 border border-[#1D1A1A] flex flex-col items-center'>
                            <span className='text-xs font-normal text-[#1D1A1A] border-b border-[#1D1A1A]'>{post.category}</span>
                            <h3 className='font-semibold leading-7 text-[24px] text-[#1D1A1A]'>{post.title}</h3>
                            <p className='text-xs font-normal text-[#838383]'>{post.author}-<span>{post.date}</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full mt-28">
            <div className='relative'>
                <img className='w-full' src={LatestFour} alt="" />
                <div className='mx-10 sm:mx-40 sm:gap-6 sm:px-40 text-center sm:py-8 absolute bg-white -bottom-28 border border-[#1D1A1A] flex flex-col items-center'>
                    <span className='text-xs font-normal text-[#1D1A1A] border-b border-[#1D1A1A]'>SKIN</span>
                    <h3 className='font-semibold leading-7 text-[24px] text-[#1D1A1A]'>Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla</h3>
                    <p className='mx-10 font-normal text-sm text-black'>Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..</p>
                    <p className='flex gap-2 text-xs font-normal text-[#838383]'>
                        By Sarfraz Jasim
                        <span>-</span>
                        <span>29 July, 2023</span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default LatestPost;