import { ExternalLink, Github, Sparkles } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "DANGOL AI",
      description:
        "Advanced AI-powered application with machine learning capabilities and intelligent automation features.",
      image: "src/assets/g5.png",
      technologies: ["React", "Node.js", "AI/ML", "Python"],
      liveUrl: "https://raman1224.github.io/DANGOL_AI",
      githubUrl: "https://github.com/raman1224/DANGOL_AI",
      featured: true,
    },
    {
      title: "Global GK",
      description:
        "Comprehensive knowledge sharing platform with articles on technology, science, and current affairs.",
      image: "src/assets/globalgk.png",
      technologies: ["Blogger", "HTML", "CSS", "JavaScript"],
      liveUrl: "https://globalgkwww.blogspot.com",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Translator AI",
      description: "Real-time language translation tool powered by AI with support for multiple languages.",
      image: "src/assets/translator.png",
      technologies: [ "AI API", "JavaScript", "CSS"],
      liveUrl: "https://raman1224.github.io/englishtonepali/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Medicare Nepal",
      description: "Healthcare management system for Nepal with appointment booking and patient management.",
      image: "src/assets/workspace.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://medicare-nepal-e6k7.vercel.app/",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "NEWAR SAMAJ Website",
      description: "Community website for Newar Samaj with event management and member portal.",
      image: "src/assets/newar.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      liveUrl: "",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects and skills with modern design.",
      image: "src/assets/raman.jpg",
      technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
      liveUrl: "https://raman1224.github.io/ramandangol",
      githubUrl: "https://github.com/raman1224/ramandangol",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work in web development, AI applications, and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-fade-in-up ${
                project.featured ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Sparkles size={14} />
                  <span>Featured</span>
                </div>
              )}

              <div className="aspect-video bg-muted relative overflow-hidden  ">
                <img 
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full m-4 h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-balance">
                  {project.title === "DANGOL AI" ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
