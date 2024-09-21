import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-lg mb-3">About Us</h5>
          <ul>
            <li><a href="/history" className="hover:text-gray-300">Our History</a></li>
            <li><a href="/team" className="hover:text-gray-300">Our Team</a></li>
            <li><a href="/careers" className="hover:text-gray-300">Careers</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3">Contact Info</h5>
          <ul>
            <li><a href="mailto:info@example.com" className="hover:text-gray-300">info@example.com</a></li>
            <li><a href="tel:+123456789" className="hover:text-gray-300">+1 234 567 89</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3">Important Link</h5>
          <ul>
            <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-300">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-3">Newsletter</h5>
          <p>Subscribe to our newsletter for the latest updates.</p>
          
        </div>
      </div>
      <div className="mt-8 ml-5 text-gray-400">
        <p>Copyright ©2024 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
