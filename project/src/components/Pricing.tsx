import { Check } from 'lucide-react';

export const Pricing = () => {
  const features = [
    "7 weeks intensive program",
    "Hands-on projects",
    "Live online sessions",
    "24/7 doubt resolution",
    "Industry expert mentors",
    "Certificate of completion",
    "Resume building assistance",
    "LinkedIn profile optimization",
    "Mock interviews",
    "Company connections",
    "Job placement assistance",
    "Career counseling"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Program Investment</h2>
          <p className="text-lg text-gray-700">
            Comprehensive training and placement support to jumpstart your career
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Complete Package</h3>
              <div className="text-4xl font-bold text-blue-600 mb-4">₹35,000</div>
              <p className="text-gray-600">All-inclusive training with placement support</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};