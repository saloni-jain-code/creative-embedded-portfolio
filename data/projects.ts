export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  heroImage: string;
  detailImages: string[];
  reflection: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Soldering Sculpture',
    shortDescription: 'Small sculpture made by soldering 12 pins and a bent brass rod on a protoboard.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    detailImages: [
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop'
    ],
    reflection: 'REFLECTION HERE'
  },
  // Add more projects here
];
