import ServiceCard from "./ServiceCard";
import { ClipboardList, Headphones, SearchCheck, Share2 } from "lucide-react";

export default function ServicesList() {
  const services = [
    {
      icon: ClipboardList,
      title: "Administrative Support",
      description: "I can handle your emails, schedule appointments, and manage your calendar to keep your business running smoothly."
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "I can create and schedule posts, engage with your audience, and help grow your social media presence across various platforms."
    },
    {
      icon: SearchCheck,
      title: "Research & Data Entry",
      description: "I can conduct market research, compile data, and provide you with accurate and organized information to support your business decisions."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "I can assist your customers via email, chat, or phone, ensuring they receive timely and helpful responses to their inquiries."
    }
  ];

  return (
    <section id="services-list" className="py-20 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
