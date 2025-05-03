import { Brain, Database, Notebook as Robot, CircleDashed, Code } from 'lucide-react';

export const SpecializedAreas = () => {
  const areas = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI Coaching",
      description: "Master artificial intelligence concepts and applications with expert guidance.",
      learning: [
        'Machine Learning Fundamentals',
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Computer Vision',
        'AI Ethics & Governance'
      ],
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Big Data Coaching",
      description: "Transform raw data into valuable insights and strategic business decisions.",
      learning: [
        'Data Analytics & Visualization',
        'Hadoop & Spark Ecosystems',
        'Data Engineering Pipelines',
        'Predictive Analytics',
        'Business Intelligence'
      ],
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: <Robot className="h-8 w-8" />,
      title: "Robotics Coaching",
      description: "Build and program robotic systems for automation and innovation.",
      learning: [
        'Robot Programming',
        'Robot Operating Systems (ROS)',
        'Automation Principles',
        'Embedded Systems',
        'Industrial Robotics'
      ],
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <section id="specialized-areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Coaching Areas</h2>
          <p className="text-lg text-gray-700">
            Explore our core coaching domains and the specialized areas where we provide expert guidance and hands-on training.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <div className={`flex items-center gap-3 mb-6 ${area.color}`}>
                  {area.icon}
                  <h3 className="text-xl font-bold">{area.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{area.description}</p>

                <ul className="space-y-3 mb-8">
                  {area.learning.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`${area.color} mr-2`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact" 
                  className={`inline-block bg-white border hover:bg-gray-50 ${area.color} font-medium px-6 py-3 rounded-md transition-colors`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};