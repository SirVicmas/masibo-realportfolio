
import React from 'react';
import { cn } from '@/lib/utils';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a 
              href="mailto:vicsibo01@gmail.com" 
              className="glass-card p-6 flex flex-col items-center hover-scale animate-slide-up"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">vicsibo01@gmail.com</p>
            </a>
            
            <a 
              href="tel:+254713245842" 
              className="glass-card p-6 flex flex-col items-center hover-scale animate-slide-up [animation-delay:100ms]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+254 713 245 842</p>
            </a>
            
            <a 
              href="https://github.com/SirVicmas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-6 flex flex-col items-center hover-scale animate-slide-up [animation-delay:200ms]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">GitHub</h3>
              <p className="text-sm text-muted-foreground">github.com/SirVicmas</p>
            </a>
            
            <div 
              className="glass-card p-6 flex flex-col items-center animate-slide-up [animation-delay:300ms]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/5 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-1">Location</h3>
              <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
            </div>
          </div>
          
          <div className="text-center animate-fade-in [animation-delay:400ms]">
            <a 
              href="mailto:vicsibo01@gmail.com" 
              className={cn(
                "inline-flex items-center justify-center rounded-md px-8 py-4",
                "bg-black text-white hover:bg-black/90 transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black",
                "text-base font-medium"
              )}
            >
              Send me a message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
