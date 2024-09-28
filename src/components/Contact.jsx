import React, { useState } from 'react';
import { User, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://hiringring.com/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 lg:p-20 rounded-lg max-w-xl" id='contact'>
      <h1 className="text-3xl lg:text-4xl font-bold text-primary text-center lg:text-left mb-10">
        Get in touch now!
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
            Enter Your Name
          </label>
          <User className="absolute right-3 top-9" size={20} />
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500" />
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
            Enter Your Email
          </label>
          <Mail className="absolute right-3 top-9" size={20} />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500"/>
        </div>
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm mb-2" htmlFor="message">
            Enter Your Message
          </label>
          <MessageCircle className="absolute right-3 top-[42px]" size={20} />
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="bg-transparent border-b-2 border-primary w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none placeholder-gray-500" rows="3"></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="bg-white hover:bg-primary hover:text-white text-slate-900 border border-gray-300 py-2 px-4 rounded-3xl focus:outline-none">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
