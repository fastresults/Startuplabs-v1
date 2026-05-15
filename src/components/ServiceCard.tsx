import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, buttonText, link }) => {
  const getBackgroundImage = (title: string) => {
    switch (title) {
      case 'ideation':
        return 'url("/images/ideation-bg.png")';
      case 'planning':
        return 'url("/images/planning-bg.png")';
      case 'funding':
        return 'url("/images/funding-bg.png")';
      case 'development':
        return 'url("/images/dev-bg.png")';
      case 'your launch':
        return 'url("/images/launch-bg.png")';
      case 'your growth':
        return 'url("/images/growth-bg.png")';
      default:
        return 'linear-gradient(to bottom, #2563eb, #1d4ed8)';
    }
  };

  return (
    <div 
      className="flex flex-col min-h-[400px] md:h-[600px] p-4 md:p-8 bg-cover bg-center bg-no-repeat relative transition-all duration-300"
      style={{
        backgroundImage: getBackgroundImage(title),
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'local'
      }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 pt-4 md:pt-8 pl-4 md:pl-[65px] lg:pl-[125px]">{title}</h2>
      <p className="text-white mb-8 pl-4 md:pl-[65px] lg:pl-[125px] w-full md:w-[70%] lg:w-[50%] text-sm md:text-base">{description}</p>
      <div className="flex-grow"></div>
      <div className="pl-4 md:pl-[65px] lg:pl-[125px] pb-12 md:pb-16">
        <Link to={link} className="inline-block border border-white text-white px-4 md:px-6 py-2 hover:bg-white hover:text-blue-600 transition-colors text-sm md:text-base">
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;