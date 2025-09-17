
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 95, proficiency: "Advanced" },
        { name: "CSS", level: 95, proficiency: "Advanced" },
        { name: "JavaScript", level: 90, proficiency: "Full" },
        { name: "React.js", level: 90, proficiency: "Full" },
        { name: "Tailwind CSS", level: 85, proficiency: "Intermediate" },
        { name: "Responsive Design", level: 90, proficiency: "Advanced" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "SQL", level: 75, proficiency: "Intermediate" },
        { name: "Java", level: 60, proficiency: "Limited" },
        { name: "API Integration", level: 80, proficiency: "Intermediate" },
        { name: "Database Management", level: 70, proficiency: "Intermediate" },
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C", level: 90, proficiency: "Full" },
        { name: "Java", level: 65, proficiency: "Limited" },
        { name: "JavaScript", level: 93, proficiency: "Full" },
        { name: "TypeScript", level: 75, proficiency: "Intermediate" },
      ],
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", level: 95, proficiency: "Advanced" },
        { name: "GitHub", level: 95, proficiency: "Advanced" },
        { name: "VS Code", level: 95, proficiency: "Advanced" },
        { name: "Vercel", level: 90, proficiency: "Full" },
      ],
    },
  ]

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Advanced":
        return "bg-gradient-to-r from-green-500 to-emerald-500"
      case "Full":
        return "bg-gradient-to-r from-blue-500 to-cyan-500"
      case "Intermediate":
        return "bg-gradient-to-r from-yellow-500 to-orange-500"
      case "Limited":
        return "bg-gradient-to-r from-orange-500 to-red-500"
      default:
        return "bg-gradient-to-r from-gray-500 to-slate-500"
    }
  }

  const getProficiencyBadgeColor = (proficiency) => {
    switch (proficiency) {
      case "Advanced":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Full":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Limited":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-muted/30 via-background to-secondary/5 relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Technical expertise and proficiency levels across various technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:scale-[1.02] animate-slide-up group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-primary group-hover:text-secondary transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium hover:scale-105 transition-transform duration-200 ${getProficiencyBadgeColor(skill.proficiency)}`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                    <div className="relative bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${getProficiencyColor(skill.proficiency)} animate-pulse`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 0.1}s`,
                        }}
                      />
                    </div>
                    <div className="text-xs text-muted-foreground mt-1 text-right font-medium">{skill.level}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Always Learning
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            I`m constantly expanding my skill set and staying updated with the latest technologies. Currently exploring
            advanced React patterns, AI/ML integration, and modern deployment strategies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
