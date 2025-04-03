
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    "Advanced machine learning models",
    "Natural language processing",
    "Computer vision capabilities",
    "Predictive analytics",
    "Real-time data processing",
    "Automated decision making",
    "Continuous learning systems",
    "Seamless integration with existing software"
  ];
  
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-infinity-200 rounded-full opacity-20"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-ai-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-infinity-300 rounded-full opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Powerful <span className="gradient-text">AI Features</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive AI platform provides all the tools you need to transform your business.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-tr from-infinity-600 to-ai-600 flex items-center justify-center p-8">
                <div className="glass-card p-6 rounded-xl w-full h-full flex items-center justify-center text-2xl font-bold text-infinity-900">
                  AI Platform Dashboard
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Everything You Need in One Platform</h3>
            <p className="text-gray-600 mb-8">
              Our AI platform provides a comprehensive suite of tools and features designed to help businesses leverage the power of artificial intelligence without requiring deep technical expertise.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-infinity-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-infinity-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
