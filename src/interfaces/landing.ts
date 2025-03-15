export type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
  delay: number;
  borderColor: string;
};

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  imageUrl: string;
}

export interface ServicesProps {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
}

export interface ParallaxProps {
  bgImage: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  overlayColor?: string;
  speed?: number;
  height?: string;
}

export interface MapProps {
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface LandingContainerProps {
  heroProps: HeroProps;
  servicesProps: ServicesProps;
  parallaxProps: ParallaxProps;
  mapProps: MapProps;
}
