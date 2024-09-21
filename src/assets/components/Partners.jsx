import React from 'react'
import img1 from '../images/business-teammates-working-late-office.jpg';
import img2 from '../images/young-businessman-standing-against-old-wall-opening-laptop.jpg';

const Partners = () => {
    return (
        <div className="p-8 lg:p-20 bg-white">
            <div className="flex flex-col lg:flex-row justify-between items-center pt-8" id='aboutus'>

                <div className="lg:w-1/2 mb-10 lg:mb-0">
                    <h2 className="text-4xl lg:text-5xl font-bold text-primary text-center lg:text-left mb-10">
                        Meet our expert<br></br>
                        partners
                    </h2>
                    <p className="text-gray-600 text-lg">
                        At Hiring Ring LLP , we pride ourselves on the
                        strength and expertise of our leadership team.
                        Our partners bring decades of experience in
                        recruitment, talent acquisition, and human
                        resources, ensuring that our clients receive
                        unparalleled service and results
                    </p>
                </div>

                {/* Right Section: Images */}
                <div className="flex flex-wrap gap-3 lg:gap-5 justify-center lg:justify-start">
                    <img
                        src={img1}
                        alt="Person 1"
                        className="w-full sm:w-[45%] lg:w-[250px] h-auto lg:h-[440px] object-cover"
                    />
                    <img
                        src={img2}
                        alt="Person 2"
                        className="w-full sm:w-[45%] lg:w-[250px] h-auto object-cover"
                    />
                </div>
            </div>
        </div>
    )
}

export default Partners
