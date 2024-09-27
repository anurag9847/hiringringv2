
import { timelineData } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
    return (
        <>
            
            <VerticalTimeline
                lineColor="#ccc"
                className="relative mt-5"
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
