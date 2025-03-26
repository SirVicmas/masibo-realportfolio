
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h2 className="section-title">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I'm Victor Sibo, a software engineer and prompt engineer with a passion for creating innovative solutions that combine traditional software development with cutting-edge AI capabilities.
            </p>
            <p>
              My journey in technology began with a solid foundation in software development, mastering languages like JavaScript, Python, and SQL. As artificial intelligence evolved, I expanded my expertise to include prompt engineering and AI model integration.
            </p>
            <p>
              I believe in building applications that are not only functional but also intuitive and aesthetically pleasing. My work spans educational platforms, business automation tools, and collaborative environments that enhance user experiences through thoughtful design and intelligent features.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring aspiring developers.
            </p>
          </div>
        </div>
        
        <div className="animate-fade-in [animation-delay:300ms]">
          <div className="glass-card p-8 space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Education</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium">Computer Science, BSc</div>
                  <div className="text-xs text-muted-foreground">University of Technology, 2018-2022</div>
                </div>
                <div>
                  <div className="text-sm font-medium">AI & Machine Learning Certification</div>
                  <div className="text-xs text-muted-foreground">Tech Institute, 2023</div>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-lg font-medium mb-3">Work Experience</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium">Senior Software Engineer</div>
                  <div className="text-xs text-muted-foreground">Digital Solutions Inc., 2022-Present</div>
                </div>
                <div>
                  <div className="text-sm font-medium">AI Prompt Engineer</div>
                  <div className="text-xs text-muted-foreground">AI Innovations, 2021-2022</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Full Stack Developer</div>
                  <div className="text-xs text-muted-foreground">Web Technologies Ltd., 2019-2021</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
