import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ArrowRight } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team features.",
      tags: ["TypeScript", "React", "Firebase"],
      link: "#",
      gradient: "from-emerald-500 to-cyan-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts and comprehensive reporting.",
      tags: ["React", "D3.js", "PostgreSQL"],
      link: "#",
      gradient: "from-rose-500 to-orange-500"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js",
    "Python", "SQL", "Git", "AWS"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-20"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      <nav className="fixed top-0 w-full bg-slate-900/50 backdrop-blur-xl z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">About</a>
              <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Projects</a>
              <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Skills</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
            </div>

            <button
              className="md:hidden text-slate-300 hover:text-cyan-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-slate-800/50 p-4 rounded-lg">
              <a href="#about" className="text-slate-300 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#projects" className="text-slate-300 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#skills" className="text-slate-300 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>Skills</a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
              <span className="text-cyan-400 text-sm font-medium">Welcome to my portfolio</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">Ashraya Yelisetty</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Crafting beautiful and functional web experiences. Full-stack developer passionate about turning ideas into reality.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-medium flex items-center gap-2 group"
              >
                Get in Touch <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-slate-600 text-slate-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 font-medium"
              >
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm a developer who loves turning ideas into reality through code. With a strong foundation in both frontend and backend technologies, I create seamless digital experiences that users love.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open source, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300 backdrop-blur-sm">
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Love to develop!!</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">5+ projects delivered</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-slate-300">Open source contributor</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-slate-900/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`
                  }}
                />
                <div className={`h-40 bg-gradient-to-br ${project.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-slate-400 mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-300 text-xs rounded-full border border-slate-600 group-hover:border-cyan-500/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group/link transition-colors"
                  >
                    View Project <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl text-slate-200 font-medium hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-slate-300 mb-12">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 text-slate-300 rounded-xl hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-slate-800 text-slate-300 rounded-xl hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-4 bg-slate-800 text-slate-300 rounded-xl hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300 border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50"
              >
                <Mail size={24} />
              </a>
            </div>
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 text-lg font-medium"
            >
              Send me an email
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
