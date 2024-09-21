import React from 'react'
import BgImg from '../images/business-partners-shaking-hands-monochrome.jpg'
const Expertise = () => {
    return (
        <>
            <div className='p-8 lg:p-20 bg-white'>
                <h1 className='text-4xl lg:text-5xl font-bold text-primary text-center lg:text-center mb-10'>
                    Our Partners expertise
                </h1>
                
            </div>
            <img src={BgImg} alt="" className='h-[250px] w-full object-cover' />
        </>
    )
}

export default Expertise
