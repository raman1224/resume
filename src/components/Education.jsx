import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Texas College of Management and IT",
      period: "2024 – Present",
      location: "Kathmandu, Nepal",
      gpa: "3.52 / 4.0",
      status: "Currently Pursuing",
      description: "Focusing on full-stack development, software engineering principles, and modern web technologies.",
      subjects: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Web Development",
        "Software Engineering",
        "Object-Oriented Programming",
        "Computer Networks",
      ],
      current: true,
    },
    {
      degree: "+2 in Computer Engineering",
      institution: "Mahendra Maheshdev Secondary School",
      period: "2020 - 2024",
      location: "Kathmandu, Nepal",
      gpa: "Completed",
      status: "Completed",
      description: "Built strong foundation in computer science fundamentals and programming concepts.",
      subjects: ["Programming in C", "Computer Architecture", "Digital Logic", "Mathematics", "Physics", "English"],
      current: false,
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Academic journey and continuous learning in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex items-start mb-12 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                    edu.current ? "bg-primary border-primary" : "bg-background border-muted-foreground"
                  } z-10`}
                ></div>

                {/* Content */}
                <div className="ml-16 bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="text-primary mr-2" size={20} />
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          edu.current
                            ? "bg-primary/10 text-primary"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <div className="text-right mt-4 md:mt-0">
                      <div className="flex items-center text-muted-foreground mb-2 md:justify-end">
                        <Calendar size={16} className="mr-2" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-2 md:justify-end">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center text-muted-foreground md:justify-end">
                          <Award size={16} className="mr-2" />
                          <span className="font-medium">{edu.gpa}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 text-pretty">{edu.description}</p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Subjects:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {edu.subjects.map((subject, subjectIndex) => (
                        <span
                          key={subjectIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {edu.current && (
                    <div className="mt-4 flex items-center text-primary font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                      <span>Currently Studying</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-primary">Continuous Learning</h3>
            <p className="text-muted-foreground text-pretty">
              Beyond formal education, I`m constantly learning through online courses, documentation, and hands-on
              projects. I believe in staying updated with the latest technologies and best practices in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
