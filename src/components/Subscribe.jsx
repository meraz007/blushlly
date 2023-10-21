const Subscribe = () => {
    return(
        <>
        <div className="bg-[#DDDDDD] flex justify-center py-12">
            <div className="flex flex-col w-full max-w-[700px] items-center">
                <h2 className="w-[400px] text-center font-medium text-4xl text-[#1D1A1A]">Subscribe For Best Beauty Tips</h2>
                <div className="w-full relative">
                    <input 
                        className="w-full mt-10 mb-4 bg-white font-normal text-xl text-[#1D1A1A] rounded-[29px] py-[13px] pl-6" 
                        type="text" 
                        placeholder="Enter your email address" 
                    />
                    <span className="absolute top-[38%] right-0 bg-[#1D1A1A] rounded-[29px] font-normal text-lg text-white py-[13px] px-[47px]">Subscribe</span>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" name="" id="" />
                    <label className="pl-2 font-normal text-base text-[#1D1A1A]" htmlFor="">I agree that my submitted data is being collected and stored.</label>
                </div>
            </div>
        </div>
        </>
    )
}

export default Subscribe;