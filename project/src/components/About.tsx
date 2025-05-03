import { Target, Users, Trophy, BookOpen } from 'lucide-react';

export const About = () => {
  const stats = [
    { icon: <Target />, value: '500+', label: 'Professionals Coached' },
    { icon: <Users />, value: '75+', label: 'Organizations Served' },
    { icon: <Trophy />, value: '93%', label: 'Client Satisfaction' },
    { icon: <BookOpen />, value: '85%', label: 'Implementation Success' },
  ];

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About BrainSpark</h2>
          <p className="text-lg text-gray-700">
            We are a team of industry experts dedicated to empowering professionals and organizations 
            with cutting-edge skills in AI, Big Data, and Robotics through personalized coaching and 
            hands-on training.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              To bridge the gap between theoretical knowledge and practical implementation in emerging 
              technologies, enabling individuals and organizations to harness the full potential of AI, 
              Big Data, and Robotics.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-700">
              We combine industry expertise with personalized coaching methodologies to deliver 
              practical, results-oriented training that directly addresses your specific challenges 
              and objectives.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};