
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, Github, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-container">
      <div className="mb-12 max-w-3xl">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-gray-600">
          Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:vicsibo01@gmail.com" 
            className="border border-gray-200 rounded-lg p-5 flex items-center space-x-4 hover:border-gray-300 hover:shadow-sm transition-all duration-300 animate-fade-in"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Email</h3>
              <p className="text-sm text-gray-600">vicsibo01@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="tel:+254713245842" 
            className="border border-gray-200 rounded-lg p-5 flex items-center space-x-4 hover:border-gray-300 hover:shadow-sm transition-all duration-300 animate-fade-in [animation-delay:100ms]"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Phone</h3>
              <p className="text-sm text-gray-600">+254 713 245 842</p>
            </div>
          </a>
          
          <a 
            href="https://github.com/SirVicmas" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-gray-200 rounded-lg p-5 flex items-center space-x-4 hover:border-gray-300 hover:shadow-sm transition-all duration-300 animate-fade-in [animation-delay:200ms]"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <Github className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-1">GitHub</h3>
              <p className="text-sm text-gray-600">github.com/SirVicmas</p>
            </div>
          </a>
          
          <div 
            className="border border-gray-200 rounded-lg p-5 flex items-center space-x-4 animate-fade-in [animation-delay:300ms]"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-medium mb-1">Location</h3>
              <p className="text-sm text-gray-600">Nairobi, Kenya</p>
            </div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in [animation-delay:400ms]">
          <a 
            href="mailto:vicsibo01@gmail.com" 
            className={cn(
              "inline-flex items-center justify-center rounded-md px-8 py-3",
              "bg-black text-white hover:bg-black/90 transition-colors",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-black",
              "text-sm font-medium"
            )}
          >
            Send me a message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
