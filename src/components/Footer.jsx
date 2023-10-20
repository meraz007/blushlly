import logo from '../assets/svg/logoWhite.svg';
import facebook from '../assets/svg/facebookCircleWhite.svg';
import instagram from '../assets/svg/instagramCircleWhite.svg';
import threads from '../assets/svg/threadsCircleWhite.svg';
import twitter from '../assets/svg/twitterCircleWhite.svg';
import pinterest from '../assets/svg/pinterestCircleWhite.svg';
import linkedin from '../assets/svg/linkedinCircleWhite.svg';
import Insta from '../assets/img/insta.png';
import PopularOne from '../assets/img/popularOne.png';
import PopularThree from '../assets/img/popularThree.png';
import PopularTwo from '../assets/img/popularTwo.png';
import PopularFour from '../assets/img/popularFour.png';
import latestOne from '../assets/img/latestOne.png';
import Search from '../assets/svg/searchIcon.svg'

const Footer = () => {
    const categories = [
        {category: 'Beauty', countity: 4},
        {category: 'Fashion', countity: 8},
        {category: 'Makeup', countity: 6},
        {category: 'Body', countity: 2},
        {category: 'Lifestyle', countity: 7},
    ];

    const popularPost = [
        {
            img: PopularOne,
            titile: 'Vivamus placerat Luctus Neque nec Faucibus',
            postDay: 7
        },
        {
            img: Insta,
            titile: 'Vivamus placerat Luctus Neque nec Faucibus',
            postDay: 4
        },
        {
            img: PopularThree,
            titile: 'Vivamus placerat Luctus Neque nec Faucibus',
            postDay:14
        },
    ];

    const galleries = [
        PopularOne,PopularThree,Insta,PopularFour,PopularTwo,latestOne
    ];

    const tags = ['Beauty', 'Skin', 'Makeup', 'Hair', 'Tips', 'Fashion', 'Eye', 'Skin']

    const navLinks = [
        {link:'/home', label:'Home'},
        {link:'/categories', label:'Categories'},
        {link:'/makeup', label:'Makeup'},
        {link:'/blog', label:'Blog'},
        {link:'/about', label:'About'},
        {link:'/contact-us', label:'Contact Us'},
    ];

    const socialsIcons = [facebook, instagram, threads, twitter, pinterest, linkedin]

    return(
        <>
        <div className="max-w-6xl mx-auto container py-12">
            <div className="flex md:flex-row flex-col gap-10 py-10">
                <div className="w-full md:w-1/3">
                    <h5 className='font-normal text-base text-white uppercase mb-4'>Categories</h5>

                    {categories.map((cat,index) => (
                        <div>
                            <div key={index} className='flex justify-between py-5'>
                                <span className='font-normal text-base text-white'>{cat.category}</span>
                                <span className='font-normal text-base text-white'>({cat.countity})</span>
                            </div>
                            <div className="border-t border-[#9B9B9B]"></div>
                        </div>
                    ))}
                    <div className='relative flex'>
                        <input 
                            type="text" 
                            className='bg-[#535353] p-3.5 w-full mt-4' 
                            placeholder='Search' 
                        />
                        <img className='absolute right-3 top-7' src={Search} alt="" />
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <h5 className='font-normal text-base text-white uppercase mb-6'>POPULAR POST</h5>

                    {popularPost.map((post,index) => (
                        <div key={index} className='flex gap-3 mb-4 cursor-pointer'>
                            <img className='w-[100px] h-[100px]' src={post.img} alt="" />
                            <div className='flex flex-col'>
                                <p className='font-normal text-base text-white'>{post.titile}</p>
                                <span className='mt-4 font-normal text-xs text-[#CFCFCF]'>{post.postDay} Days ago</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-1/3">
                    <h5 className='font-normal text-base text-white mb-6'>GALLARY</h5>

                    <div className='flex flex-wrap -m-1'>
                        {galleries.map((img,index) => (
                            <div key={index} className='w-1/3 p-1'>
                                <img className='w-[100px] h-[100px]' src={img} alt="" />
                            </div>
                        ))}
                    </div>
                   
                    <h5 className='font-normal text-base text-white my-3'>TAGS</h5>
                    
                    <div className='flex flex-wrap -m-1'>
                        {tags.map((tag,index) => (
                            <div key={index} className='w-1/4 p-1'>
                                <p className='text-center w-full bg-[#535353] rounded-[15px] py-[3px] px-2.5 font-normal text-xs text-[#CFCFCF]'>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="border-t border-[#9B9B9B]"></div>

            <div className="flex justify-between items-center py-8">
                <img src={logo} alt="logo" />
                <div className='hidden md:block'>
                    <ul className='flex gap-6'>
                        {navLinks.map((nav,index) => (
                            <li className='font-medium text-base text-white' key={index}><a href={nav.link}>{nav.label}</a></li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="border-t border-[#9B9B9B]"></div>

            <div className='flex flex-col md:flex-row md:justify-between py-4 gap-4 md:gap-0'>
                <div className='flex gap-4'>
                    {socialsIcons.map(icon => (
                        <a href=""><img src={icon} alt="" /></a>
                    ))}
                </div>

                <p className='text-white font-normal text-base'>© 2023 PostX. Designed By WPXPO</p>
            </div>
        </div>
        </>
    )
}

export default Footer;