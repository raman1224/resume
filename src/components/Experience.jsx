import { Calendar, MapPin } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Independent Learning",
      company: "Web Development Learner",
      period: "2024 - Present",
      location: "Kathmandu, Nepal",
      type: "Self-Directed Learning",
      description: "Continuously expanding my skills through hands-on projects and modern web development practices.",
      achievements: [
        "Learning React.js, Node.js, Java, SQL",
        "Developing daily projects: CRUD apps, APIs, authentication",
        "Using GitHub for version control",
        "Deployment: Deployed applications using Vercel, ensuring seamless integration and continuous deployment",
      ],
      current: true,
    },
    {
      title: "Web Developer Intern (OJT)",
      company: "MMSS",
      period: "May 2024 - Nov 2024",
      location: "Kathmandu, Nepal",
      type: "On-the-Job Training",
      description: "Gained practical experience in web development through real-world projects and team collaboration.",
      achievements: [
        "Developed a school news portal using HTML, CSS, JavaScript, and SQL",
        "Implemented responsive design and used XAMPP server for local development",
        "Focused on debugging and optimizing the portal for better performance",
        "Collaborated with team members and received mentorship from experienced developers",
      ],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            My journey in web development and continuous learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    exp.current ? "bg-primary border-primary" : "bg-background border-muted-foreground"
                  } z-10`}
                ></div>

                {/* Content */}
                <div className="ml-16 bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mt-2">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-pretty">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.current && (
                    <div className="mt-4 flex items-center text-primary font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                      <span>Currently Active</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-muted/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-primary">Looking Forward</h3>
            <p className="text-muted-foreground text-pretty">
              I`m actively seeking opportunities to contribute to innovative projects and continue growing as a
              full-stack developer. My experience in both independent learning and collaborative environments has
              prepared me for the challenges of modern web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
