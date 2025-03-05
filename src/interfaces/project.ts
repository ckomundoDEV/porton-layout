export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  images: {
    url: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
  features?: string[];
};
