
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in [animation-delay:200ms]">
          <div className="inline-block mb-2 px-3 py-1 rounded-full bg-black/5 text-sm font-medium">
            Software Engineer & AI Prompt Engineer
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Victor Sibo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md text-balance">
            Crafting sophisticated software solutions and AI prompts that drive innovation and efficiency.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className={cn(
                "inline-flex items-center justify-center rounded-md px-6 py-3",
                "bg-black text-white hover:bg-black/90 transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              )}
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className={cn(
                "inline-flex items-center justify-center rounded-md px-6 py-3",
                "bg-white border border-black/10 hover:bg-black/5 transition-colors",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              )}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 rounded-full blur-lg opacity-70"></div>
            <div className="relative overflow-hidden rounded-full border-4 border-white shadow-lg w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              <img
                src="/lovable-uploads/0435f8f8-6770-4811-8c0f-c987737ec0cf.png"
                alt="Victor Sibo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
