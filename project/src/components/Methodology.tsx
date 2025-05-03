import { useState } from 'react';
import { Target, BookOpen, Code, MessageSquare, Lightbulb } from 'lucide-react';

export const Methodology = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Assessment & Goal Setting",
      description: "We begin by understanding your current skills, knowledge gaps, and specific goals, then develop a personalized coaching plan.",
      icon: <Target className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Conceptual Foundation",
      description: "We ensure you understand the essential theoretical concepts and principles that underpin successful technology implementation.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Hands-on Application",
      description: "You'll apply your learning through practical projects, case studies, and real-world scenarios relevant to your industry or goals.",
      icon: <Code className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Feedback & Refinement",
      description: "Regular feedback sessions help identify areas for improvement and refine your approach to technology implementation.",
      icon: <MessageSquare className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Integration & Expansion",
      description: "We help you integrate new skills into your work context and develop strategies for continued learning and growth.",
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Coaching Methodology</h2>
          <p className="text-lg text-gray-700">
            We follow a proven coaching methodology that ensures practical learning, personalized guidance, and measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 mb-12">
          {steps.map(step => (
            <div 
              key={step.id}
              className={`relative ${step.id < steps.length ? 'after:content-[""] after:absolute after:top-8 after:right-0 after:w-full after:h-[2px] after:bg-gray-200 md:after:w-full md:after:left-1/2 after:z-0' : ''}`}
            >
              <button
                className={`relative z-10 w-16 h-16 mx-auto flex items-center justify-center rounded-full transition-all ${
                  activeStep === step.id 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                {step.icon}
              </button>
              <div className="text-center mt-3">
                <span className={`font-bold ${activeStep === step.id ? 'text-blue-600' : 'text-gray-500'}`}>
                  {step.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4">{steps[activeStep - 1].title}</h3>
            <p className="text-gray-700">{steps[activeStep - 1].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};