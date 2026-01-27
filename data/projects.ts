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
    heroImage: '',
    detailImages: [
      '',
      ''
    ],
    reflection: 'REFLECTION HERE'
  },
  // Add more projects here
];
