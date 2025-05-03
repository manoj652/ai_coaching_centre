import { Star, Building, BarChart as ChartBar } from 'lucide-react';

export const SuccessStories = () => {
  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Data Science Manager, InfoTech Solutions",
      content: "The Big Data coaching program transformed our team's capabilities. We're now implementing advanced analytics solutions that have directly contributed to a 27% increase in operational efficiency.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Priya Patel",
      role: "AI Research Lead, Future Innovations",
      content: "The depth of knowledge and practical approach to AI coaching was exactly what I needed. I've successfully deployed three machine learning models since completing the program.",
      image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg"
    },
    {
      name: "Rajesh Kumar",
      role: "Automation Engineer, NextGen Manufacturing",
      content: "From robotics theory to hands-on implementation, this coaching program provided everything I needed to lead our automation initiative. Our production line efficiency has improved by 35%.",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg"
    }
  ];

  const caseStudies = [
    {
      icon: <Star className="h-6 w-6 text-blue-600" />,
      title: "AI Implementation",
      company: "E-Commerce Giant",
      improvement: "28% increase in sales",
      description: "Implemented advanced recommendation systems and customer analytics"
    },
    {
      icon: <Building className="h-6 w-6 text-purple-600" />,
      title: "Robotics Automation",
      company: "Manufacturing Plant",
      improvement: "42% efficiency gain",
      description: "Automated assembly line with advanced robotics integration"
    },
    {
      icon: <ChartBar className="h-6 w-6 text-orange-500" />,
      title: "Big Data Analytics",
      company: "Healthcare Provider",
      improvement: "23% cost reduction",
      description: "Implemented predictive analytics for resource optimization"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-700">
            Real results achieved by professionals and organizations through our expert coaching
            in AI, Big Data, and Robotics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8">
              <div className="mb-6">{study.icon}</div>
              <h3 className="text-xl font-bold mb-2">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.company}</p>
              <p className="text-green-600 font-bold mb-2">{study.improvement}</p>
              <p className="text-gray-700">{study.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};