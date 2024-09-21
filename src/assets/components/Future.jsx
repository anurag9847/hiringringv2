import React from 'react'
import BgImg from '../images/silhouette-successful-male-standing-window-overlooking-island-manhattan.jpg'

const Future = () => {
    return (
        <>
            <div className='p-8 lg:p-20 bg-white'>
                <h1 className='text-4xl lg:text-5xl font-bold text-primary text-center lg:text-left mb-10'>
                    Let s build the future together
                </h1>
                <p className='text-gray-600 text-lg'>
                    Whether you re a company looking to grow your team or a professional seeking your next
                    opportunity,<br></br> Hiring Ring is here to help. Lets connect and take the next
                    step toward a brighter future.
                </p>
            </div>
            <img src={BgImg} alt="" className='h-[250px] w-full'/>
        </>
    )
}

export default Future
