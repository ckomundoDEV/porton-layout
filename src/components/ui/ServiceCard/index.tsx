import { FC } from 'react';
import { ScrollAnimation, AnimatedIcon } from '@/components/animations';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
  delay: number;
  borderColor: string;
};

export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  color,
  hoverColor,
  delay,
  borderColor
}) => {
  return (
    <ScrollAnimation type="fadeInUp" delay={delay}>
      <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-elegant hover:shadow-bold transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full border-t-4 ${borderColor}`}>
        <div className="p-6 md:p-8 h-full flex flex-col">
          <AnimatedIcon 
            icon={icon}
            text={title}
            subtext={description}
            color={color}
            hoverColor={hoverColor}
            ariaLabel={`Servicio de ${title}`}
            className="mb-2"
          />
          <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
            <a href="#contacto" className="inline-flex items-center text-primary hover:text-secondary text-sm font-medium">
              <span>Conocer más</span>
              <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default ServiceCard; 