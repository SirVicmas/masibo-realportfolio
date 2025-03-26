
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 1-5
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 5 },
      { name: "Python", level: 5 },
      { name: "SQL", level: 4 },
      { name: "PHP", level: 4 },
      { name: "TypeScript", level: 4 },
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 5 },
      { name: "Flask", level: 5 },
      { name: "Django", level: 4 },
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
    ]
  },
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "Prompt Engineering", level: 5 },
      { name: "LLM Integration", level: 5 },
      { name: "AI Model Deployment", level: 4 },
      { name: "NLP", level: 4 },
      { name: "Computer Vision", level: 3 },
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 5 },
      { name: "Docker", level: 4 },
      { name: "AWS", level: 4 },
      { name: "CI/CD", level: 4 },
      { name: "RESTful APIs", level: 5 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <div className="mb-12 max-w-3xl">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="text-gray-600">
          My technical expertise spans software development and AI engineering with a focus on creating innovative solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <div 
            key={category.name}
            className={cn(
              "border border-gray-200 rounded-lg p-6",
              "animate-fade-in [animation-delay:var(--delay)]"
            )}
            style={{ '--delay': `${(index + 1) * 100}ms` } as React.CSSProperties}
          >
            <h3 className="font-playfair text-xl font-medium mb-5">{category.name}</h3>
            
            <div className="space-y-5">
              {category.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-gray-500">
                      {skill.level === 5 ? "Expert" 
                        : skill.level === 4 ? "Advanced" 
                        : skill.level === 3 ? "Intermediate" 
                        : "Familiar"}
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-black rounded-full transition-all duration-1000"
                      style={{ width: `${(skill.level / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
