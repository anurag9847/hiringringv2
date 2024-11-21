import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/images/man-wearing-t-shirt-gesturing.jpg';
import img2 from '../assets/images/interview.jpg';
import { User, PhoneCall, File } from 'lucide-react';

const GetHired = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        resume: null,
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type !== 'application/pdf') {
            setError('Please upload a PDF file');
            return;
        }
        setFormData({
            ...formData,
            resume: file,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.resume || formData.resume.type !== 'application/pdf') {
            setError('Please upload a valid PDF resume.');
            return;
        }

        const data = new FormData();
        data.append('name', formData.name);
        data.append('phone', formData.phone);
        data.append('resume', formData.resume);

        setIsSubmitting(true);

        try {
            const response = await fetch('https://hiringring.com/apply.php', {
                method: 'POST',
                body: data,
            });

            const result = await response.json();

            if (result.status === 'success') {
                alert('Form submitted successfully!');
                setFormData({ name: '', phone: '', resume: null });
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error occurred while submitting. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id='gethired' className="relative mt-10">
            <div className='p-8 lg:p-20 mt-10 hidden lg:block '>
                <h1 className='text-4xl lg:text-5xl font-normal text-primary text-center lg:text-left mb-2 mt-8'>
                    Get Hired Now
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center bg-cover bg-no-repeat bg-center">
                {/* Get Hired Text */}
                <div className="absolute top-1/3 left-0 right-0 flex justify-center">
                    <h2 className="block mb-5 sm:hidden text-white text-3xl font-semibold text-center margin-top-[-100px]">Get Hired Now</h2>
                </div>
                {/* Image on small screens */}
                <div className="w-full md:hidden">
                    <img src={img1} alt="Get Hired" className="w-full" />
                </div>
                {/* Form Section on small screens */}
                <div className="md:hidden w-full p-6">
                    <form onSubmit={handleSubmit} className="bg-white p-6 h-full">
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                                Enter Your Name
                            </label>
                            <User className="absolute right-3 top-9" size={18} />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-transparent border-b border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"
                                required
                            />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                Enter Your Mobile
                            </label>
                            <PhoneCall className="absolute right-3 top-9" size={18} />
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="bg-transparent border-b-[0.2px] border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"
                                required
                            />
                        </div>
                        <div className="mb-6 relative">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="resume">
                                Upload Your Resume (PDF Only)
                            </label>
                            <div className="flex items-center">
                                <input
                                    type='file'
                                    id="resume"
                                    name="resume"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <button
                                    type="button"
                                    className="flex-1 border-b border-primary py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                    onClick={() => document.getElementById('resume').click()}
                                >
                                    {formData.resume ? formData.resume.name : 'Choose this'}
                                </button>
                                <File className="ml-2" size={18} />
                            </div>
                        </div>
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className={`bg-primary hover:bg-secondary text-white py-2 px-4 rounded-full focus:outline-none ${isSubmitting ? 'cursor-wait' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send'}
                            </button>
                        </div>
                    </form>
                </div>
                {/* Images on large screens */}
                <div className="hidden md:flex w-full content-center">
                    <div className="flex  gap-4 w-1/2 pl-12">
                        <img src={img1} alt="Get Hired Left" className="w-full sm:w-[45%] lg:w-[330px] h-auto lg:h-[450px] object-cover" />
                        <img src={img2} alt="Get Hired Right" className="w-full sm:w-[45%] lg:w-[330px] h-auto lg:h-[450px] object-cover" />
                    </div>
                    <div className="w-1/2 p-6">
                        {/* Form Section for large screens */}
                        <form onSubmit={handleSubmit} className="bg-white p-6 h-full">
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                                    Enter Your Name
                                </label>
                                <User className="absolute right-3 top-9" size={18} />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="bg-transparent border-b border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-4 relative">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                                    Enter Your Mobile
                                </label>
                                <PhoneCall className="absolute right-3 top-9" size={18} />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="bg-transparent border-b border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"
                                    required
                                />
                            </div>
                            <div className="mb-6 relative">
                                <label className="block text-gray-700 text-sm mb-2" htmlFor="resume">
                                    Upload Your Resume (PDF Only)
                                </label>
                                <div className="flex items-center">
                                    <input
                                        type='file'
                                        id="resume"
                                        name="resume"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        className="flex-1 border-b border-primary py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                        onClick={() => document.getElementById('resume').click()}
                                    >
                                        {formData.resume ? formData.resume.name : 'Choose this'}
                                    </button>
                                    <File className="ml-2" size={18} />
                                </div>
                            </div>
                            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className={`bg-primary hover:bg-secondary text-white py-2 px-4 rounded-full focus:outline-none ${isSubmitting ? 'cursor-wait' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetHired;
