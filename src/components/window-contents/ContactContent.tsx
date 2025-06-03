import React, { useState } from 'react';
import { Mail, AlertCircle } from 'lucide-react';

const ContactContent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto URL with form data
    const mailtoUrl = `mailto:ahmed.856@osu.edu?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Open default email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact-form max-w-[500px] mx-auto p-6">
      <div className="mb-6 text-center">
        <div className="w-12 h-12 bg-[#3a6ea5] rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="text-white" size={24} />
        </div>
        <h2 className="text-xl font-semibold text-[#2a5a85] mb-2">Get in Touch</h2>
        <p className="text-gray-600">Fill out the form below to send me an email</p>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-start gap-3">
        <AlertCircle className="text-yellow-600 flex-shrink-0 mt-0.5" size={18} />
        <p className="text-sm text-yellow-700">
          This form will open your default email client with the pre-filled information.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block mb-1.5 font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form-control w-full p-2.5 border border-[#dee2e6] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#3a6ea5]" 
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="email" className="block mb-1.5 font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control w-full p-2.5 border border-[#dee2e6] rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#3a6ea5]" 
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="message" className="block mb-1.5 font-medium text-gray-700">Message</label>
          <textarea 
            id="message" 
            className="form-control w-full p-2.5 border border-[#dee2e6] rounded text-sm min-h-[120px] resize-y focus:outline-none focus:ring-2 focus:ring-[#3a6ea5]" 
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-gradient-to-b from-[#4a90e2] to-[#1a5ca3] text-white border-none py-2.5 px-5 rounded cursor-pointer font-bold hover:bg-gradient-to-b hover:from-[#5a9ff2] hover:to-[#2a6cb3] transition-all flex items-center justify-center gap-2"
        >
          <Mail size={18} />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactContent;