import { HandHelping, Briefcase, CheckCircle, FileText, Users, Search, Layers } from 'lucide-react';
import { Target, Globe, Code, User, Award, Heart } from 'lucide-react';



export const navItems = [
  { label: "Home", href: "hero" },
  { label: "Get Hired", href: "gethired" },
  { label: "Service", href: "service" },
  { label: "About Us", href: "aboutus" },
  { label: "Contact", href: "contact" },
];

export const WhyChooseUsData = [
  {
    name: "Tailored Solutions",
    icon: <HandHelping className=' text-primary' />,
    desc: "We understand that each organization is unique, with specific needs and challenges. Our personalized approach ensures that we find candidates who not only meet the technical requirements but also align with your company culture."
  },
  {
    name: "Extensive Network",
    icon: <Briefcase className=' text-primary' />,
    desc: "We understand that each organization is unique, with specific needs and challenges. Our personalized approach ensures that we find candidates who not only meet the technical requirements but also align with your company culture."
  },
  {
    name: "Expertise Across Industries",
    icon: <Users className=' text-primary' />,
    desc: "We understand that each organization is unique, with specific needs and challenges. Our personalized approach ensures that we find candidates who not only meet the technical requirements but also align with your company culture."
  },
  {
    name: "End-to-End Recruitment",
    icon: <CheckCircle className=' text-primary' />,
    desc: "We understand that each organization is unique, with specific needs and challenges. Our personalized approach ensures that we find candidates who not only meet the technical requirements but also align with your company culture."
  }
];

export const ServicesData = [
  {
    name: 'Permanent Recruitment',
    desc: 'We specialize in finding full-time employees who are the right fit for your company. Our rigorous screening process ensures that only the most qualified candidates are presented to you.',
    icon: <FileText  className='text-primary' />,
  },
  {
    name: 'Temporary Staffing',
    desc: 'Need to fill a short-term gap? Our temporary staffing solutions provide flexibility and immediate access to skilled professionals who can step in and contribute from day one.',
    icon: <Users  className='text-primary' />,
  },
  {
    name: 'Executive Search',
    desc: 'Finding top-level executives requires a strategic approach. Our executive search team is dedicated to identifying and recruiting leaders who will drive your company’s success.',
    icon: <Search  className='text-primary' />,
  },
  {
    name: 'Outsourcing Solutions',
    desc: 'Whether you need to outsource your recruitment process entirely or just a part of it, our customizable solutions can help streamline your hiring process and reduce costs.',
    icon: <Layers  className='text-primary' />,
  },
];

export const timelineData = [
  {
    title: 'Strategic Vision',
    description: 'Each partner at Hiring Ring has a proven track record of developing and executing successful recruitment strategies...',
    icon: <Target className="text-blue-500" />,
  },
  {
    title: 'Industry-Specific Knowledge',
    description: 'Our partners have spent years honing their expertise in specific industries. This specialized knowledge allows them to understand...',
    icon: <Target className="text-blue-500" />,
  },
  {
    title: 'Global Experience',
    description: 'With experience working in diverse markets around the world, our partners bring a global perspective to recruitment...',
    icon: <Globe className="text-purple-500" />,
  },
  {
    title: 'Innovative Approaches',
    description: 'Our partners are at the forefront of recruitment innovation. They leverage the latest tools, technologies, and methodologies to streamline the hiring process, improve candidate experience, and deliver faster, more effective results.',
    icon: <Code className="text-red-500" />,
  },
  {
    title: 'Personalized Attention',
    description: 'Despite their extensive experience, our partners remain deeply involved in the recruitment process. They take the time to understand each client\'s unique requirements and work closely with our team to ensure the best possible outcomes.',
    icon: <User className="text-yellow-500" />,
  },
  {
    title: 'Proven Success',
    description: 'Over the years, our partners have successfully placed thousands of candidates in roles that have transformed businesses and advanced careers. Their success stories are a testament to their expertise, dedication, and commitment to excellence.',
    icon: <Award className="text-teal-500" />,
  },
  {
    title: 'Long-Term Relationships',
    description: 'Our partners believe in building lasting relationships with both clients and candidates. They are trusted advisors who provide ongoing support and guidance, long after the initial placement has been made.',
    icon: <Heart className="text-pink-500" />,
  },
];

