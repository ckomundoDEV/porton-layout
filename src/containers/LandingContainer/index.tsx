import { FC } from 'react';
  

import { Navbar, Footer } from '@/components/layout';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ScrollAnimation } from '@/components/animations';
import { LandingContainerProps } from '@/interfaces/landing';
import { HeroBanner, ProductSection, FeaturesSection, ParallaxSection, ProjectsSection, TestimonialsSection, ContactSection, MapLocation } from '@/sections';


const LandingContainer: FC<LandingContainerProps> = ({
  heroProps,
  servicesProps,
  parallaxProps,
  mapProps
}) => {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div id="inicio">
        <HeroBanner 
          title={heroProps.title}
          subtitle={heroProps.subtitle}
          ctaText={heroProps.ctaText}
          ctaLink={heroProps.ctaLink}
          secondaryCtaText={heroProps.secondaryCtaText}
          secondaryCtaLink={heroProps.secondaryCtaLink}
          imageUrl={heroProps.imageUrl}
        />
      </div>
      
      {/* Services Section */}
      <section className="section py-20 md:py-28 relative overflow-hidden" id="servicios">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 bg-slate-800 dark:bg-slate-900 z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-slate-700/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-slate-700/10 blur-3xl"></div>
        
        <div className="container-custom px-4 md:px-6 relative z-10">
          <ScrollAnimation type="fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm md:text-base font-semibold tracking-wider text-green-400 uppercase mb-3">
                {servicesProps.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                {servicesProps.title}
              </h2>
              <p className="text-slate-300 text-lg">
                {servicesProps.description}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {servicesProps.services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                color={service.color}
                hoverColor={service.hoverColor}
                delay={service.delay}
                borderColor={service.borderColor}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Section */}
      <ProductSection />
      
      {/* Features Section */}
      <FeaturesSection />
      
      {/* Parallax Section */}
      <ParallaxSection
        bgImage={parallaxProps.bgImage}
        height={parallaxProps.height || "70vh"}
        speed={parallaxProps.speed || 0.2}
        overlayColor={parallaxProps.overlayColor || "rgba(142, 68, 173, 0.5)"}
      >
        <div className="text-center text-white px-4 md:px-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">
            {parallaxProps.title}
          </h2>
          <p className="text-lg md:text-2xl mb-10 max-w-3xl mx-auto">
            {parallaxProps.subtitle}
          </p>
          <a 
            href={parallaxProps.buttonLink} 
            className="inline-block bg-gradient-vibrant shadow-elegant hover:shadow-bold text-white font-semibold py-3 px-8 md:px-10 rounded-lg transition-all transform hover:scale-105 backdrop-blur-sm"
            aria-label={parallaxProps.buttonText}
          >
            {parallaxProps.buttonText}
          </a>
        </div>
      </ParallaxSection>
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Map Section */}
      <div className="section bg-neutral-light dark:bg-gray-900 py-16 md:py-20">
        <div className="container-custom px-4 md:px-6">
          <ScrollAnimation type="fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">Nuestra Ubicación</h2>
          </ScrollAnimation>
          <ScrollAnimation type="fadeInUp">
            <div className="h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-elegant">
              <MapLocation 
                address={mapProps.address}
                coordinates={mapProps.coordinates}
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default LandingContainer; 