import Insta from '../assets/img/insta.png'
import SectionTitle from './SectionTitle'
import RandomPostOne from '../assets/img/randomPostOne.png'
import RandomPostTwo from '../assets/img/randomPostTwo.png'
import RandomPostSix from '../assets/img/RandomPostSix.png'
import RandomPostThree from '../assets/img/randomPostThree.png'
import RandomPostFive from '../assets/img/randomPostFive.png'


const RandomPost = () => {
    const posts = [
        {
            img: RandomPostOne,
            category: 'MAKEUP',
            title: 'Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla',
            description: 'Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023'
        },
        {
            img: RandomPostTwo,
            category: 'SPA',
            title: 'Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla',
            description: 'Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023'
        },
        {
            img: RandomPostThree,
            category: 'MAKEUP',
            title: 'Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla',
            description: 'Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023'
        },
        {
            img: Insta,
            category: 'MAKEUP',
            title: 'Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla',
            description: 'Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023'
        },
        {
            img: RandomPostFive,
            category: 'TIPS',
            title: 'Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla',
            description: 'Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023'
        },
        {
            img: RandomPostSix,
            category: 'MAKEUP',
            title: 'Sed dignissim quam nulla, at sodales elit venenatis at. In in  fringilla',
            description: 'Donec eget leo laoreet, faucibus ante et, finibus orci. Nam pulvinar felis vel mi aliquam, vitae dapibus odio euismod. Cras bibendum nisi a interdum facilisis…..',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023'
        },
    ]
    return(
        <>
        <SectionTitle title={'Random Post'} />
        {posts.map((post,index) => (
            <>
            <div key={index} className={`mt-8 flex relative ${index % 2 == 0 ? 'justify-start' : 'justify-end'}`}>
                <div>
                    <img src={post.img} alt="" className='w-[596px] h-[476px]' />
                </div>

                <div className={`absolute max-w-[666px] bg-white  top-[80px] border border-[#1D1A1A] py-16 px-8 ${index % 2 == 0 ? 'right-0' : 'left-0'}`}>
                    <span className='font-normal text-xs text-[#1D1A1A] border-b'>{post.category}</span>
                    <h4 className='mt-5 font-medium text-[32px] leading-8 text-[#1D1A1A]'>{post.title}</h4>
                    <p className='mt-5 font-normal text-sm text-[#1D1A1A]'>{post.description}</p>
                    <p className='mt-4 font-medium text-xs text-[#838383]'><span>{post.author}</span>- <span>{post.date}</span></p>
                </div>
            </div>

            <div className='border-dashed border-t border-[#1D1A1A] my-8'></div>
            </>
        ))}
        <div className='flex justify-center items-center py-8'>
            <button className='rounded-[28px] bg-[#1D1A1A] py-4 px-12 font-medium text-base text-white'>Load More</button>
        </div>
        </>
    )
}

export default RandomPost;