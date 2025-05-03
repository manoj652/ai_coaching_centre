import { Users, UserRound, Building } from 'lucide-react';

export const Programs = () => {
  const programsData = [
    {
      id: 1,
      title: "Personalized 1:1 Coaching",
      description: "Work directly with an expert coach who will guide your learning journey, provide personalized feedback, and help you overcome specific challenges.",
      icon: <UserRound className="h-8 w-8 text-blue-600" />,
      features: [
        "Customized learning plan",
        "Flexible scheduling",
        "Project-based learning",
        "Regular progress assessment"
      ],
      idealFor: "Professionals seeking to develop specialized skills or overcome specific challenges in their work."
    },
    {
      id: 2,
      title: "Group Workshops",
      description: "Join a small group of peers for structured learning sessions led by an expert coach, combining instruction with hands-on practice and peer collaboration.",
      icon: <Users className="h-8 w-8 text-purple-600" />,
      features: [
        "Structured curriculum",
        "Peer learning opportunities",
        "Collaborative projects",
        "Industry-relevant case studies"
      ],
      idealFor: "Teams looking to develop common skills or individuals who thrive in collaborative learning environments."
    },
    {
      id: 3,
      title: "Corporate Training",
      description: "Customized training programs for organizations seeking to build internal capabilities in AI, Big Data, and Robotics aligned with business objectives.",
      icon: <Building className="h-8 w-8 text-orange-500" />,
      features: [
        "Organizational needs assessment",
        "Custom program development",
        "Business-aligned projects",
        "Implementation support"
      ],
      idealFor: "Organizations building technology capabilities that align with strategic business objectives."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coaching Programs</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We offer flexible coaching programs designed to meet the diverse needs of individuals and organizations at all stages of their technology journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programsData.map(program => (
            <div 
              key={program.id} 
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 group"
            >
              <div className="mb-6">{program.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{program.title}</h3>
              <p className="text-gray-700 mb-6">{program.description}</p>
              
              <ul className="space-y-2 mb-6">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <p className="text-sm text-gray-600 font-medium mb-4">
                  <span className="font-bold">Ideal for:</span> {program.idealFor}
                </p>
                <a 
                  href="#contact" 
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md transition-colors"
                >
                  Request Information
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};