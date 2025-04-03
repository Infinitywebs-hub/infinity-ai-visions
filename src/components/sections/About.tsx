
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Lightbulb, 
  RefreshCw,
  TrendingUp
} from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-3 px-4 py-1 border-infinity-300 text-infinity-700 bg-infinity-50">About Us</Badge>
          <h2 className="text-4xl font-bold mb-6">Pioneering the Future with <span className="gradient-text">AI Innovation</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Infinity AI, we're on a mission to push the boundaries of what's possible with artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Founded in 2020, Infinity AI began with a simple yet ambitious vision: to make advanced AI solutions accessible to businesses of all sizes. Our team of AI pioneers, data scientists, and industry experts work together to create AI-powered technologies that transform how businesses operate.
            </p>
            <p className="text-gray-600">
              We believe that AI should be powerful yet approachable, sophisticated yet intuitive. Every solution we create embodies these principles, delivering exceptional results for our clients across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl">
              <Brain className="h-10 w-10 text-infinity-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">AI Expertise</h4>
              <p className="text-gray-600">World-class team of AI researchers and engineers</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <Lightbulb className="h-10 w-10 text-ai-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Innovation</h4>
              <p className="text-gray-600">Constantly pushing the boundaries of what's possible</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <RefreshCw className="h-10 w-10 text-ai-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Adaptability</h4>
              <p className="text-gray-600">Tailored AI solutions for your unique challenges</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl">
              <TrendingUp className="h-10 w-10 text-infinity-600 mb-4" />
              <h4 className="text-lg font-semibold mb-2">Results</h4>
              <p className="text-gray-600">Driving measurable business growth through AI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
