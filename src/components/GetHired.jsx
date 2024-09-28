import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../assets/images/man-wearing-t-shirt-gesturing.jpg';
import img2 from '../assets/images/businessman-black-suit-holding-tasklist (1).jpg';
import { User, PhoneCall, File } from 'lucide-react';

const GetHired = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        resume: null,
    });
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false); // New state for submitting

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

        setIsSubmitting(true); // Set submitting state to true

        try {
            const response = await fetch('https://hiringring.com/apply.php', {
                method: 'POST',
                body: data,
            });

            const result = await response.json(); // Parse JSON response

            if (result.status === 'success') {
                alert('Form submitted successfully!');
                // Optionally reset the form data
                setFormData({ name: '', phone: '', resume: null });
            } else {
                alert('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error occurred while submitting. Please try again.');
        } finally {
            setIsSubmitting(false); // Reset submitting state
        }
    };

    const formVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <motion.div
            className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-20 bg-white"
            id='gethired'
            initial="hidden"
            animate="visible"
            variants={formVariants}
        >
            <div className="flex flex-wrap gap-3 lg:gap-5 justify-center lg:justify-start">
                <motion.img
                    src={img1}
                    alt="Person 1"
                    className="w-full sm:w-[45%] lg:w-[250px] object-cover"
                    whileHover={{ scale: 1.05 }}
                />
                <motion.img
                    src={img2}
                    alt="Person 2"
                    className="w-full sm:w-[45%] lg:w-[250px] object-cover"
                    whileHover={{ scale: 1.05 }}
                />
            </div>
            <motion.div
                className="mt-10 lg:mt-0 lg:ml-20 w-full lg:max-w-md"
                variants={formVariants}
            >
                <h2 className="text-2xl text-primary font-bold mb-6">Get Hired Now!</h2>
                <form onSubmit={handleSubmit}>
                    <motion.div className="mb-4 relative" variants={formVariants}>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
                            Enter Your Name
                        </label>
                        <User className="absolute right-3 top-9" size={20} />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"
                            required
                        />
                    </motion.div>
                    <motion.div className="mb-4 relative" variants={formVariants}>
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
                            Enter Your Mobile
                        </label>
                        <PhoneCall className="absolute right-3 top-9" size={20} />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"
                            required
                        />
                    </motion.div>
                    <motion.div className="mb-6 relative" variants={formVariants}>
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
                                className="flex-1 border-b-2 border-primary py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                                onClick={() => document.getElementById('resume').click()}
                            >
                                {formData.resume ? formData.resume.name : 'Choose File'}
                            </button>
                            <File className="ml-2" size={20} />
                        </div>
                    </motion.div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <motion.div className="flex items-center justify-center" variants={formVariants}>
                        <button 
                            type="submit" 
                            className={`bg-white hover:bg-primary hover:text-white text-slate-900 border border-gray-300 py-2 px-4 rounded-3xl focus:outline-none ${isSubmitting ? 'cursor-wait' : ''}`} 
                            disabled={isSubmitting} // Disable button while submitting
                        >
                            {isSubmitting ? 'Sending...' : 'Send'} {/* Change button text based on submitting state */}
                        </button>
                    </motion.div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default GetHired;
