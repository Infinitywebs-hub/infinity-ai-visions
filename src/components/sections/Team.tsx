
const Team = () => {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Chief AI Scientist",
      bio: "Ph.D. in Computer Science with over 15 years of experience in AI research and development.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      bio: "Former engineering leader at major tech companies with expertise in scalable AI systems.",
      image: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Aisha Patel",
      role: "Lead AI Engineer",
      bio: "Specialist in machine learning models with a focus on natural language processing.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "David Kim",
      role: "Head of Product",
      bio: "Experienced product leader focused on creating intuitive AI-powered user experiences.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Meet Our <span className="gradient-text">Expert Team</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of AI specialists, engineers, and industry experts are passionate about pushing the boundaries of artificial intelligence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-infinity-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
