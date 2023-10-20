import SectionTitle from "./SectionTitle";
import PopularOne from '../assets/img/popularOne.png';
import PopularTwo from '../assets/img/popularTwo.png';
import PopularFour from '../assets/img/popularFour.png';
import PopularFive from '../assets/img/popularFive.png';
import PopularThree from '../assets/img/popularThree.png';

const PopularPost = () => {
    const posts = [
        {
            category: 'SKIN',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: PopularOne
        },
        {
            category: 'HAIR',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: PopularTwo
        },
        {
            category: 'MAKEUP',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: PopularThree
        },
    ]
    const postsLastTwo = [
        {
            category: 'SKIN',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: PopularFour
        },
        {
            category: 'HAIR',
            title: 'Vivamus placerat Luctus Neque nec Faucibus',
            author: 'By Sarfraz Jasim',
            date: '29 July, 2023',
            image: PopularFive
        },
    ]
    return(
        <>
        <div className="mt-10">
            <SectionTitle title={'Popular Post'} />
        </div>
        <div className='flex flex-wrap -m-4'>
            {posts.map(post => (
                <div className="w-full sm:w-1/3 p-4 mb-12 sm:mb-0">
                    <div className='relative'>
                        <img className='w-full' src={post.image} alt="" />
                        <div className='mx-6 gap-2 px-8 text-center py-3 absolute bg-white md:-bottom-20 -bottom-10 border border-[#1D1A1A] flex flex-col items-center'>
                            <span className='text-xs font-normal text-[#1D1A1A] border-b border-[#1D1A1A]'>{post.category}</span>
                            <h3 className='font-semibold leading-7 text-[24px] text-[#1D1A1A]'>{post.title}</h3>
                            <p className='text-xs font-normal text-[#838383]'>{post.author}-<span>{post.date}</span></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="mt-6 sm:mt-24">
            <div className='flex flex-wrap -m-4'>
                {postsLastTwo.map(post => (
                    <div className="w-full sm:w-1/2 p-4 mb-20 sm:mb-0">
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
        </div>
        </>
    )
}

export default PopularPost;