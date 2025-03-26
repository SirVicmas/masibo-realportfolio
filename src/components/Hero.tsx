
import React from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 animate-fade-in [animation-delay:200ms]">
          <div className="flex flex-col space-y-6">
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
              Software Engineer & AI Prompt Engineer
            </h4>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
              Victor Masibo
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Crafting sophisticated software solutions and AI prompts that drive innovation and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium px-6 py-3",
                  "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex items-center justify-center rounded-md text-sm font-medium px-6 py-3",
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                )}
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-xl overflow-hidden border-2 border-border">
              <img
                src="/lovable-uploads/0435f8f8-6770-4811-8c0f-c987737ec0cf.png"
                alt="Victor Masibo"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-br from-primary/10 to-accent/5 blur-3xl opacity-50 rounded-full scale-150"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
