import threads from '../assets/svg/threadsCircle.svg'
import twitter from '../assets/svg/twitterCircle.svg'
import linkedin from '../assets/svg/linkedinCircle.svg'
import facebook from '../assets/svg/facebookCircle.svg'
import pinterest from '../assets/svg/pinterestCircle.svg'
import instagram from '../assets/svg/instagramCircle.svg'
import logo from '../assets/svg/logo.svg'
import search from '../assets/svg/search.svg'

const Navbar = () => {
    const icons = [
        {name:facebook, alt:'facebook icon'},
        {name:instagram, alt:'instagram icon'},
        {name:threads, alt:'threads icon'},
        {name:twitter, alt:'twitter icon'},
        {name:pinterest, alt:'pinterest icon'},
        {name:linkedin, alt:'linkedin icon'},
    ];

    const navLinks = [
        {link:'/home', label:'Home'},
        {link:'/categories', label:'Categories'},
        {link:'/makeup', label:'Makeup'},
        {link:'/blog', label:'Blog'},
        {link:'/about', label:'About'},
        {link:'/contact-us', label:'Contact Us'},
    ];
    return(
        <>
        <div className="flex justify-between py-4 items-center">
            <div>
                <span className="font-medium text-base text-[#6F6F6F]">Welcome there!</span>
            </div>
            <div className='flex gap-6'>
                <div className="flex gap-3">
                    {icons.map((icon,index) => (
                        <a key={index} href="">
                            <img  src={icon.name} alt={icon.alt} />
                        </a>
                    ))}
                </div>
                <div className='border-r border-[#DDDDDD]'></div>
                <button className='text-white font-medium text-base bg-black rounded-[22px] px-5 py-2'>Subscribe</button>
            </div>
        </div>

        <div className='border-t border-2 border-[#DDDDDD]'></div>
        
        <div className='flex justify-between py-5 items-center'>
            <img src={logo} alt="" />
            <div className='hidden sm:block'>
                <ul className='flex gap-6'>
                    {navLinks.map((icon,index) => (
                        <li key={index}>
                            <a className='font-medium text-base text-[#1D1A1A]'  href={icon.link}>
                            {icon.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='hidden sm:flex'>
                <input 
                    className='w-[70px] font-medium text-base text-[#1D1A1A]' 
                    type="text" 
                    placeholder='search' 
                />
                <img src={search} alt="" />
            </div>
        </div>
        </>
    )
}

export default Navbar;