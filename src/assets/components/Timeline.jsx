import React from 'react';
import { timelineData } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <>
            <div className='container mx-auto py-3 flex justify-center items-center pt-5'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
                    Our Partners’ Expertise
                </h1>
            </div>
            <VerticalTimeline
                lineColor="#ccc"
                className="relative"
            >
                {timelineData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        iconStyle={{
                            background: '#e5e7eb', 
                            color: '#6b7280',       
                            boxShadow: '0 0 0 2px #6b7280',
                            width: '16px',         
                            height: '16px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '-8px',   
                        }}
                        iconClassName="flex justify-center items-center"
                        contentStyle={{
                             
                            boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
                            background: '#f3f4f6', 
                        }}
                        contentArrowStyle={{ borderRight: '7px solid #6b7280' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-4"
                        >
                            <div className="flex items-center mb-4">
                                <div className="mr-2">{item.icon}</div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-gray-700">{item.description}</p>
                        </motion.div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </>
    );
}

export default Timeline;
