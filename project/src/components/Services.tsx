import { Brain, Database, Notebook as Robot } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Brain className="h-12 w-12 text-blue-600" />,
      title: "AI Coaching",
      description: "Master artificial intelligence through personalized guidance in machine learning, deep learning, and practical AI applications.",
      features: [
        "Custom AI project development",
        "Model optimization techniques",
        "AI implementation strategies",
        "Ethics and best practices"
      ]
    },
    {
      icon: <Database className="h-12 w-12 text-purple-600" />,
      title: "Big Data Coaching",
      description: "Learn to harness the power of data with expert guidance in analytics, processing, and visualization techniques.",
      features: [
        "Data architecture design",
        "Analytics implementation",
        "ETL pipeline development",
        "Data visualization mastery"
      ]
    },
    {
      icon: <Robot className="h-12 w-12 text-orange-500" />,
      title: "Robotics Coaching",
      description: "Develop expertise in robotics and automation through hands-on training and practical implementation guidance.",
      features: [
        "Robot programming",
        "System integration",
        "Automation solutions",
        "Safety protocols"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            Comprehensive coaching services designed to help you master cutting-edge technologies
            and implement them effectively in your organization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};