export type ImageType = {
  url: string;
  alt: string;
  title?: string;
  description?: string;
};

export type ImageCarouselProps = {
  images: ImageType[];
  autoPlayInterval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
};
