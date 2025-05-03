import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 z-0"></div>
      
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6 animate-fade-in">
              Expert Coaching in <span className="text-blue-600">AI</span>, <span className="text-purple-600">Big Data</span> & <span className="text-orange-500">Robotics</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Comprehensive coaching and training services tailored to your specific needs and goals. We empower professionals and organizations to excel in cutting-edge technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#programs" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center"
              >
                Explore Programs
              </a>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg" 
                alt="Tech coaching session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600 rounded-lg animate-float"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-600 rounded-full animate-float-delay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};