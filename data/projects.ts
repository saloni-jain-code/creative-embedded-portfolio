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
    shortDescription: 'Small sculpture made by soldering header pins and a bent brass rod in the shape of my initials (SJ) on a protoboard.',
    heroImage: '/soldering_sculpture/hero.jpg',
    detailImages: [
      '/soldering_sculpture/diagonal.jpg',
      '/soldering_sculpture/shadow.jpg',
      '/soldering_sculpture/front_white.jpg',
      '/soldering_sculpture/bottom_view.jpg'
    ],
    reflection: 'My soldering experience mostly stems from my AOE class freshman year and a bit from robotics club. I didn\'t know the proper technique of heating the pad first, adding solder to wrap around, then heating a bit more. As a result, my first set of header pins were quite messy. After learning the technique, the next set looked much better. I bent the brass rod into my initials (SJ) with some loops to make it more aesthetically pleasing, but you can see from the jagged bends that I tried other shapes first. The imperfections in both the soldering and bending embody my perseverance and efforts to reach my end goal. Overall, this piece shows my journey more so than it does some end result.'
  },
];
