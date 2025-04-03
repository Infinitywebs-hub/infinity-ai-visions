
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { 
  Mail, 
  MapPin, 
  Phone,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6"><span className="gradient-text">Get in Touch</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our AI solutions? Contact us today and discover how Infinity AI can transform your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" className="btn-primary w-full" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-infinity-100 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-infinity-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Our Location</h4>
                  <p className="text-gray-600">
                    123 Innovation Drive<br />
                    Tech District, CA 94103
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-infinity-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-infinity-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600">
                    <a href="mailto:odhiambo.stanley.ochieng@gmail.com" className="hover:text-infinity-600 transition-colors flex items-center">
                      odhiambo.stanley.ochieng@gmail.com <ExternalLink className="ml-1 h-3 w-3" />
                    </a><br />
                    <a href="mailto:info@infinityai.com" className="hover:text-infinity-600 transition-colors">
                      info@infinityai.com
                    </a><br />
                    <a href="mailto:support@infinityai.com" className="hover:text-infinity-600 transition-colors">
                      support@infinityai.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-infinity-100 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-infinity-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600">
                    <a href="tel:+15551234567" className="hover:text-infinity-600 transition-colors">
                      +1 (555) 123-4567
                    </a><br />
                    Mon-Fri, 9am-6pm PST
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <div className="w-full h-48 bg-gray-200 rounded-lg">
                {/* Placeholder for a map */}
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center text-gray-500 hover:text-infinity-600 transition-colors">
                  Interactive Map <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
