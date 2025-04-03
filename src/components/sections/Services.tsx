
import { 
  Code, 
  LineChart, 
  MessageSquare, 
  Search
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-white" />,
      title: "AI Development",
      description: "Custom AI solutions tailored to your business needs, from concept to deployment.",
      color: "from-infinity-600 to-infinity-800"
    },
    {
      icon: <LineChart className="h-12 w-12 text-white" />,
      title: "Predictive Analytics",
      description: "Turn your data into actionable insights and accurate forecasts.",
      color: "from-infinity-500 to-ai-600"
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-white" />,
      title: "Conversational AI",
      description: "Build intelligent chatbots and virtual assistants that understand natural language.",
      color: "from-ai-500 to-ai-700"
    },
    {
      icon: <Search className="h-12 w-12 text-white" />,
      title: "AI Consultation",
      description: "Expert guidance on integrating AI into your business strategy and operations.",
      color: "from-ai-600 to-infinity-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our <span className="gradient-text">AI Services</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive suite of AI-powered solutions to enhance your business capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className={`p-6 bg-gradient-to-br ${service.color}`}>
                <div className="rounded-full w-20 h-20 flex items-center justify-center bg-white/20 backdrop-blur-sm mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              </div>
              <div className="p-6 bg-white">
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
