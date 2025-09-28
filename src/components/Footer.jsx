import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-primary mb-4">
              Raman<span className="text-secondary">.</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md text-pretty">
              Aspiring Software Developer passionate about creating innovative web applications and AI-powered
              solutions. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/raman1224"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ramandangol"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto: dangolraman843@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Kathmandu, Nepal</li>
              <li>+977 9763774451</li>
              <li>dangolraman843@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-center md:text-left">
            © {currentYear} Raman Dangol. All rights reserved.
          </p>
          <p className="text-muted-foreground text-center md:text-right mt-2 md:mt-0 flex items-center">
           <img src="src/public/g5.png" alt="Logo" className="h-12 rounded-full mr-2" /> Developed by{" "}
            <a
              href="https://raman1224.github.io/DANGOL_AI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 ml-1 font-medium"
            >
              DANGOL AI
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
