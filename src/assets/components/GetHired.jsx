import React from 'react';
import img1 from '../images/man-wearing-t-shirt-gesturing.jpg';
import img2 from '../images/businessman-black-suit-holding-tasklist (1).jpg';
import { User, PhoneCall, File } from 'lucide-react';

const GetHired = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-20 bg-white" id='gethired'>
            <div className="flex flex-wrap gap-3 lg:gap-5 justify-center lg:justify-start">
                <img
                    src={img1}
                    alt="Person 1"
                    className="w-full sm:w-[45%] lg:w-[250px]  object-cover"
                />
                <img
                    src={img2}
                    alt="Person 2"
                    className="w-full sm:w-[45%] lg:w-[250px]  object-cover"
                />
            </div>
            <div className="mt-10 lg:mt-0 lg:ml-20 w-full lg:max-w-md">
                <h2 className="text-2xl text-primary font-bold mb-6">Get Hired Now!</h2>
                <form >
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                            Enter Your Name
                        </label>
                        <User className="absolute right-3 top-9" size={20} />
                        <input type="text" id="name" name="name" className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500" />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
                            Enter Your Mobile
                        </label>
                        <PhoneCall className="absolute right-3 top-9" size={20} />
                        <input type="tel" id="phone" name="phone" className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500" />
                    </div>
                    <div className="mb-6 relative">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
                            Upload Your Resume
                        </label>
                        <File className="absolute right-3 top-[42px]" size={20} />
                        <input type='file' id="message" name="message" className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"  />
                    </div>
                    <div className="flex items-center justify-center">
                        <button type="submit" className="bg-white hover:bg-primary hover:text-white text-slate-900 border border-gray-300  py-2 px-4 rounded-3xl focus:outline-none">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default GetHired;
