const SectionTitle = ({title}) => {
    return(
        <>
        <div class="flex items-center mb-5 mt-6">
            <div class="border-t-2 w-[40%] border-[#1D1A1A]"></div>
            <div class="font-semibold text-[28px] text-[#1D1A1A] flex justify-center w-[20%]">
                {title}
            </div>
            <div class="border-t-2 w-[40%] border-[#1D1A1A]"></div>
        </div>
        </>
    )
}

export default SectionTitle;