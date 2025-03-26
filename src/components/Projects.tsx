
import React from 'react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "Digital Sage Learners",
    description: "An AI-powered educational platform that adapts to individual learning styles for personalized education.",
    tags: ["React", "Python", "AI Models", "Flask"],
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Online Income Journey",
    description: "Platform connecting freelancers with opportunities, featuring AI-matched project recommendations.",
    tags: ["JavaScript", "Django", "SQL", "API Integration"],
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Automate Profit Path",
    description: "Business automation solution that streamlines workflows and optimizes revenue generation processes.",
    tags: ["Python", "JavaScript", "AI", "Process Automation"],
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Study Buddies",
    description: "Collaborative learning platform connecting students for peer-to-peer knowledge exchange.",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
    image: "/placeholder.svg",
  },
  {
    id: 5,
    title: "LegalBuddy Connector",
    description: "AI-powered legal assistant that simplifies complex legal processes and document preparation.",
    tags: ["Python", "NLP", "Document Processing", "Legal AI"],
    image: "/placeholder.svg",
  },
  {
    id: 6,
    title: "Fanfic Universe",
    description: "Creative writing platform for fan fiction with AI-assisted story development tools.",
    tags: ["React", "GPT Integration", "Content Management", "PHP"],
    image: "/placeholder.svg",
  },
  {
    id: 7,
    title: "Digital Innovation Factory",
    description: "Incubator platform for digital product ideation and development with AI prototyping tools.",
    tags: ["JavaScript", "Python", "Product Development", "Innovation"],
    image: "/placeholder.svg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="text-center mb-16 animate-fade-in">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mx-auto">
          A collection of innovative projects showcasing my expertise in software development and AI engineering.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div 
            key={project.id}
            className={cn(
              "glass-card overflow-hidden p-6 hover-scale",
              "animate-slide-up [animation-delay:var(--delay)]"
            )}
            style={{ '--delay': `${(index + 1) * 100}ms` } as React.CSSProperties}
          >
            <div className="h-48 mb-6 rounded-lg overflow-hidden bg-black/5 flex items-center justify-center">
              <div className="text-3xl font-light text-black/30">
                {project.title.split(' ').map(word => word[0]).join('')}
              </div>
            </div>
            
            <h3 className="text-xl font-medium mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2 py-1 bg-black/5 rounded-full text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
