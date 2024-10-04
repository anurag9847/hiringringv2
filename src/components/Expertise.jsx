import BgImg from '../assets/images/business-partners-shaking-hands-monochrome.jpg';

const Expertise = () => {
    return (
        <>
            <div className='relative p-8 lg:p-20 bg-white'>
                <h1 className='text-4xl lg:text-5xl font-normal text-primary text-center mb-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block'>
                    Our Partners Expertise
                </h1>
                {/* Heading for small screens */}
                <h1 className='text-4xl lg:text-5xl mt-32 font-normal text-white text-center block lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    Our Partners Expertise
                </h1>
            </div>
            <div>
                
                <img src={BgImg} alt="" className='h-[250px] w-full object-cover filter ' />
                
            </div>

        </>
    );
}

export default Expertise;
