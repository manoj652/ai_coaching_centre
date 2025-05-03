import { Zap, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-blue-400" />
              <span className="font-bold text-xl">BrainSpark</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering professionals and organizations to excel in AI, Big Data, and Robotics through expert coaching and personalized training.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Services', 'Success Stories', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Coaching Areas</h4>
            <ul className="space-y-2">
              {[
                'Artificial Intelligence',
                'Big Data Analytics',
                'Robotics & Automation',
                'Personalized Coaching',
                'Corporate Training'
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400 space-y-3">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 mr-2 shrink-0" />
                <span>123 Tech Park, Innovation Avenue,<br />Bengaluru, Karnataka 560001,<br />India</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2 shrink-0" />
                <span>+91 9113 519 224</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2 shrink-0" />
                <a href="mailto:caltec652@gmail.com" className="hover:text-white transition-colors">
                  caltec652@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BrainSpark. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};