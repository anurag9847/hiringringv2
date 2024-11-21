import logo from '../assets/images/logo-without-tag-white.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn  } from 'react-icons/fa'; // Import filled social icons
import { FaXTwitter } from "react-icons/fa6";
import { Phone, Mail, MapPin ,X} from 'lucide-react'; // Keeping Lucide for Phone, Mail, MapPin

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className='flex flex-col items-start justify-start ml-2'>
          <img src={logo} alt="Logo" className='w-28 ' />
          <p className='font-thin text-gray-400 ml-1'>©️ 2024</p>
          <p className='text-gray-400 ml-1'>Hiring Ring</p>
          <p className='text-gray-400  ml-1'>All Rights Reserved</p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3 ml-2">Contact Info</h5>
          <ul className='ml-2'>
            <li className="flex items-center mb-2">
              <Phone className="mr-2 text-gray-400" size={18} />
              <a href="tel:+919847981058" className="text-gray-400 hover:text-gray-300">+91 9778186200</a>
            </li>
            <li className="flex items-center mb-2">

              <a href="tel:+918606925701" className="text-gray-400 hover:text-gray-300">+91 6238727740</a>
            </li>
            <li className="flex items-center mb-2">
              <Mail className="mr-2 text-gray-400" size={18} />
              <a href="mailto:info@example.com" className="text-gray-400 hover:text-gray-300">info@hiringring.com</a>
            </li>
            <li className="flex items-center">

              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-gray-300">hr@hiringring.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3 ml-2">Address</h5>
          <ul className="text-gray-400 ml-2">
            <li className="flex items-center mb-2">
              <MapPin className="mr-2 text-gray-400" size={18} />
              <span>Avant Hiring Ring LLP,</span>
            </li>
            <li className="text-gray-400">4/461, 2nd floor, suite # 1717,</li>
            <li className="text-gray-400">Valamkottil Towers,</li>
            <li className="text-gray-400">Judgemukku, Kakkanad,</li>
            <li className="text-gray-400">Kochi - 682021</li>
          </ul>
        </div>
        <div className='ml-2'>
          <h5 className="font-bold text-lg mb-3">Social Links</h5>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com" className="hover:text-gray-300" target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61566564752028" className="hover:text-gray-300" target="_blank"
              rel="noopener noreferrer">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com/hiringringllp/" className="hover:text-gray-300" target="_blank"
              rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/Hiringringllp" className="hover:text-gray-300" target="_blank"
              rel="noopener noreferrer">
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
