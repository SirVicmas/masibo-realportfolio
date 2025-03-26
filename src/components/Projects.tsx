
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

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
    <section id="projects" className="section-container bg-gray-50">
      <div className="mb-12 max-w-3xl">
        <h2 className="section-title">Selected Projects</h2>
        <p className="text-gray-600">
          A collection of innovative projects showcasing my expertise in software development and AI engineering.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <Card 
            key={project.id}
            className={cn(
              "border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden bg-white shadow-sm hover:shadow",
              "animate-fade-in [animation-delay:var(--delay)]"
            )}
            style={{ '--delay': `${(index + 1) * 100}ms` } as React.CSSProperties}
          >
            <CardContent className="p-5">
              <div className="h-44 mb-5 rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
                <div className="text-3xl font-playfair font-light text-black/30">
                  {project.title.split(' ').map(word => word[0]).join('')}
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-medium">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <a href="#" className="inline-flex items-center text-sm font-medium pt-2 text-black hover:text-gray-800 transition-colors">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
