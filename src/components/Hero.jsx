import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-grid-pattern relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="w-96 h-96 mx-auto rounded-full overflow-hidden border-4 border-primary/20 animate-float">
              <img src="/public/raman.jpg" alt="Raman Dangol" className="w-full  h-full object-cover" />
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Hi, I`m{" "}
              <span className="text-primary animate-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Raman Dangol
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
              Aspiring Software Developer & Full-Stack Enthusiast
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
              Currently pursuing Bachelor`s in Information Technology with expertise in React, Node.js, Java, and SQL.
              Passionate about creating innovative web applications and AI-powered solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-200 font-medium inline-flex items-center justify-center space-x-2 animate-pulse-glow"
              >
                <span>View My Work</span>
                <ExternalLink size={16} />
              </a>

              <a
                href="#contact"
                className="border border-border text-foreground px-8 py-3 rounded-lg hover:bg-muted transition-all duration-200 font-medium inline-flex items-center justify-center space-x-2"
              >
                <Mail size={16} />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/raman1224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ramandangol"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:dangolraman843@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <ArrowDown className="mx-auto text-muted-foreground" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
