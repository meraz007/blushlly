import threads from '../assets/svg/threads.svg'
import twitter from '../assets/svg/twitter.svg'
import ProfilePic from '../assets/img/morbi.png'
import linkedin from '../assets/svg/linkedin.svg'
import facebook from '../assets/svg/facebook.svg'
import instagram from '../assets/svg/instagram.svg'
import pinterest from '../assets/svg/pinterest.svg'

const Testimonial = () => {
    const icons = [
        {name:facebook, alt:'facebook icon'},
        {name:instagram, alt:'instagram icon'},
        {name:threads, alt:'threads icon'},
        {name:twitter, alt:'twitter icon'},
        {name:pinterest, alt:'pinterest icon'},
        {name:linkedin, alt:'linkedin icon'},
    ];

    return(
        <>
        <div className="bg-[#DDDDDD] py-2 mt-32">
            <div className="max-w-2xl mx-auto container py-12">
                <div className='flex gap-6 md:flex-row flex-col items-center'>
                    <img src={ProfilePic} alt="picture" />
                    <div className='flex flex-col items-left px-4 md:px-0'>
                        <h3 className='font-medium text-4xl text-[#1D1A1A]'>Morbi Porttitor</h3>
                        <p className='leading-5 my-2 font-normal text-xs text-[#1D1A1A]'>Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.  Vivamus placerat luctus neque 
                            nec faucibus. Aliquam <strong>Gravida</strong> eu <strong>Tortor</strong>  vitae tempor.  . Mauris <strong>condimentumb </strong> 
                            scelerisque ante nec ultricies. Vivamus tincidunt nibh velit!
                        </p>
                        <div className='flex md:flex-row flex-col items-center md:justify-between mt-4'>
                            <div className='flex gap-6'>
                                {icons.map((icon,index) => (
                                    <img key={index} src={icon.name} alt={icon.alt} />
                                ))}
                            </div>
                            <span className='mt-4 font-normal text-xs text-[#1D1A1A]'>(85 posts)</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Testimonial;