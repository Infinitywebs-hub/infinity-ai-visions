
import { ArrowDownCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background elements */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background"></div>
      
      {/* Animated shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-infinity-400/10 rounded-full filter blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-ai-400/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">Infinite Possibilities</span>
            <br />
            <span>Powered by AI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We harness the power of artificial intelligence to transform businesses and create innovative solutions for the future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-primary text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 border-2 border-infinity-600 text-infinity-600 hover:bg-infinity-50 transition-colors">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDownCircle className="h-10 w-10 text-infinity-600" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
