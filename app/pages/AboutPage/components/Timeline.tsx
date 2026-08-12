import { Reveal, Stagger, StaggerRevealItem } from "@/app/components/Motion";

export default function Timeline() {
  const milestones = [
    {
      year: "2020",
      title: "Started as Virtual Assistant",
      description: "Began my journey helping small business owners manage their daily tasks"
    },
    {
      year: "2021",
      title: "Expanded Services",
      description: "Added social media management and customer support to my offerings"
    },
    {
      year: "2022",
      title: "Grew Client Base",
      description: "Successfully worked with 20+ entrepreneurs and small businesses"
    },
    {
      year: "2023",
      title: "Specialized Skills",
      description: "Mastered advanced tools and systems for better service delivery"
    },
    {
      year: "2024",
      title: "Present",
      description: "Continuing to help businesses thrive with dedicated support"
    }
  ];

  return (
    <section id="timeline" className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-4xl font-playfair text-dark mb-12 text-center">My Journey</h2>
        </Reveal>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
          
          <Stagger className="space-y-12">
            {milestones.map((item, index) => (
              <StaggerRevealItem key={index} className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="w-1/2">
                  <div className={`bg-background p-6 rounded-lg shadow-sm ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <p className="text-primary font-bold text-lg">{item.year}</p>
                    <h3 className="text-xl font-playfair text-dark mt-2">{item.title}</h3>
                    <p className="text-dark/70 mt-2 font-poppins">{item.description}</p>
                  </div>
                </div>
                
                <div className="w-fit">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                </div>
              </StaggerRevealItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
