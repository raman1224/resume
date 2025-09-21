import { Code, Lightbulb, Users, Zap } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in HTML, CSS, JavaScript, React.js, and backend technologies",
    },
    {
      icon: Lightbulb,
      title: "AI Innovation",
      description: "Creator of AI-powered applications including DANGOL AI and Translator AI",
    },
    {
      icon: Users,
      title: "Learning Journey",
      description: "Continuously expanding knowledge through personal projects and coursework",
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Currently pursuing Bachelor of IT and staying updated with latest technologies",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-muted/30 via-background to-primary/5 relative overflow-hidden"
    >
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Passionate learner and aspiring developer dedicated to creating impactful digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="mb-8 relative group">
              <img
                src="src/assets/hack3.jpg"
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Learning Journey</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Aspiring Web Developer with experience in creating dynamic websites and applications through personal projects. Currently building my skills through projects including{" "}
                <a
                  href="https://raman1224.github.io/DANGOL_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
                >
                  DANGOL AI
                </a>
                ,{" "}
                <a
                  href="https://globalgkwww.blogspot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer font-semibold"
                >
                  Global GK
                </a>
                , and{" "}
                <strong className="text-primary hover:text-secondary transition-colors duration-200 cursor-pointer">
                  Translator AI
                </strong>
                .
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Skilled in HTML, CSS, JavaScript, React.js, C, SQL, Java, Git, GitHub, Bootstrap, API integration, and
                responsive design. Continuously expanding my knowledge through coursework and practical application.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in Kathmandu, Nepal, I`m currently pursuing my Bachelor`s in Information Technology while working on personal projects like the{" "}
                <strong className="text-primary">NEWAR SAMAJ Website</strong>
                {" "}to enhance my development skills.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:scale-105 group animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <highlight.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About