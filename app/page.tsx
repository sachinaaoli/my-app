'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone, Code, Briefcase, GraduationCap, Award, Menu, X, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Event Management Website",
      description: "Designed and developed an event management website using React.js with responsive web pages, integrated APIs for event booking and payments.",
      tech: ["React.js", "API Integration", "Responsive Design"],
      link: "https://github.com/sachinaaoli/EventManagement"
    },
    {
      title: "E-commerce Website",
      description: "Built a functional e-commerce platform with product listing pages, shopping cart, checkout process, and responsive design for  desktop users.",
      tech: ["React.js", "Shopping Cart", "Payment Integration"],
      link: "https://github.com/sachinaaoli/E-commerce"
    },
    {
      title: "Waste Management System",
      description: "Developed a platform connecting households with waste collectors, featuring customer portal for selling recyclable waste, admin dashboard for driver assignment, and WasteRecord system.",
      tech: ["React.js", "Admin Dashboard", "Driver Dashboard", "Real-time Tracking"],
      link: "https://github.com/sachinaaoli/Waste_Management_System"
    }
  ];

  const skills = [
    "HTML/CSS", "JavaScript", "React.js", "C", "C++",  "Java",
    "MySQL",  "Git", "Responsive Design", "Basic Software Testing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sachina Oli
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'education', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-purple-400'
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-purple-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'education', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize text-gray-300 hover:text-purple-400 hover:bg-slate-800 rounded-md"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className={`min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center max-w-4xl">
          <div className="mb-8">
  <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-pink-400 p-1 mb-6">
    <img 
      src="" 
      alt="Sachina Oli" 
      className="w-full h-full rounded-full object-cover"
    />
  </div>
</div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            Sachina Oli
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Front-End Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Specializing in building responsive, easy-to-use interfaces with React.js, JavaScript, HTML, and CSS. 
            Passionate about turning creative designs into working code.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:oli.sachina99@gmail.com" className="hover:scale-110 transition-transform">
              <Mail className="w-8 h-8 text-purple-400" />
            </a>
            <a href="https://github.com/sachinaaoli" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Github className="w-8 h-8 text-purple-400" />
            </a>
            <a href="https://www.linkedin.com/in/sachina-oli-b55555240/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin className="w-8 h-8 text-purple-400" />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Old Baneshwor, Kathmandu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span>9845050277</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am a Front-End Developer with a solid foundation in web technologies and a genuine passion for coding. 
              I love the process of turning creative designs into working code and building applications that make a difference.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Currently pursuing my Bachelor's degree in Information Technology at Padmakanya Multiple Campus, I've gained 
              practical experience through internships and intensive training programs, working on real-world projects that 
              solve actual problems.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                <Code className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
                <p className="text-gray-400">Writing maintainable and efficient code</p>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                <p className="text-gray-400">Creative solutions to complex challenges</p>
              </div>
              <div className="text-center p-6 bg-slate-900/50 rounded-xl">
                <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Team Player</h3>
                <p className="text-gray-400">Collaborative and communicative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 hover:scale-105 transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-pink-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
                >
                  View on GitHub <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education & Certification
          </h2>
          
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-12 h-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Bachelor in Information Technology</h3>
                  <p className="text-purple-400 mb-2">Padmakanya Multiple Campus, Bagbazar, Kathmandu</p>
                  <p className="text-gray-400 mb-4">Apr 2022 - Present (8th Semester)</p>
                  <p className="text-gray-300">
                    Strong foundation in software development, data handling, and core IT concepts. 
                    Practical skills in programming, web technologies, and software testing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-12 h-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">High School - Management & Computer Science</h3>
                  <p className="text-purple-400 mb-2">Global College of Management, Kathmandu</p>
                  <p className="text-gray-400 mb-4">Jun 2019 - Jun 2021</p>
                  <p className="text-gray-300">
                    Combined studies in Management and Computer Science, providing a solid grounding in both technology and business.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <div className="flex items-start gap-4">
                <Award className="w-12 h-12 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Front-end Development Training</h3>
                  <p className="text-purple-400 mb-2">Kathmandu Metropolitan City</p>
                  <p className="text-gray-400 mb-4">2024</p>
                  <p className="text-gray-300">
                    Intensive 2-month React.js training program with hands-on projects including e-commerce and event management websites. 
                    Fast-paced, immersive experience that significantly sharpened technical skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-xl p-4 text-center hover:bg-purple-500/20 hover:scale-105 transition-all duration-300 border border-transparent hover:border-purple-500/40"
                >
                  <p className="text-gray-300 font-medium">{skill}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Communication", "Problem Solving", "Team Collaboration", "Time Management", "Confidentiality"].map((soft, i) => (
                  <span key={i} className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300">
                    {soft}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-400">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {["English", "Nepali", "Hindi"].map((lang, i) => (
                  <span key={i} className="px-4 py-2 bg-pink-500/20 rounded-full text-pink-300">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/20">
            <p className="text-xl text-gray-300 mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a
                href="mailto:oli.sachina99@gmail.com"
                className="flex flex-col items-center gap-4 p-6 bg-slate-900/50 rounded-xl hover:bg-purple-500/20 hover:scale-105 transition-all"
              >
                <Mail className="w-12 h-12 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <p className="text-purple-300">oli.sachina99@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/sachinaaoli"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 bg-slate-900/50 rounded-xl hover:bg-purple-500/20 hover:scale-105 transition-all"
              >
                <Github className="w-12 h-12 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">GitHub</p>
                  <p className="text-purple-300">@sachinaaoli</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/sachina-oli-b55555240/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-4 p-6 bg-slate-900/50 rounded-xl hover:bg-purple-500/20 hover:scale-105 transition-all"
              >
                <Linkedin className="w-12 h-12 text-purple-400" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">LinkedIn</p>
                  <p className="text-purple-300">Sachina Oli</p>
                </div>
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Old Baneshwor, Kathmandu, Nepal</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-400 border-t border-purple-500/20">
        <p>© 2026 Sachina Oli. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}