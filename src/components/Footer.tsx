
import React from 'react';
import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Victor Masibo. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-5">
            <a 
              href="https://github.com/SirVicmas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a 
              href="mailto:vicsibo01@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            
            <a 
              href="tel:+254713245842" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
