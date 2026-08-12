import { Reveal, Stagger, StaggerItem } from "@/app/components/Motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Administrative",
      skills: ["Email Management", "Calendar Scheduling", "Document Organization", "Data Entry"]
    },
    {
      category: "Social Media",
      skills: ["Content Creation", "Post Scheduling", "Community Engagement", "Analytics"]
    },
    {
      category: "Customer Support",
      skills: ["Email Support", "Chat Support", "Customer Relations", "Issue Resolution"]
    },
    {
      category: "Organization",
      skills: ["Project Management", "Task Prioritization", "Time Management", "Process Improvement"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-playfair text-dark mb-4 text-center">My Skills</h2>
          <p className="text-center text-dark/70 mb-12 font-poppins max-w-2xl mx-auto">
            Here&apos;s what I bring to the table to help your business succeed
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <StaggerItem key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-playfair text-dark mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-dark/80 font-poppins">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
