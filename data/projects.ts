export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  heroImage: string | string[];
  detailImages: string[];
  reflection: string;
  githubUrl?: string;
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
  {
    id: 'project-2',
    title: 'Blinking ESP32',
    shortDescription: 'I tested my ESP32 by writing some simple code to flash it white every half second.',
    heroImage: '/blinking_esp32/blinking.mov',
    detailImages: [
    ],
    reflection: ''
  },
  {
    id: 'project-3',
    title: 'PCB Pendant <3',
    shortDescription: 'Custom heart-shaped PCB (printed circuit board) milled with CNC machine that blinks a red LED periodically using 555 timer chip.',
    heroImage: '/pcb_pendant/top.mov',
    detailImages: [
      '/pcb_pendant/hero.jpg',
      '/pcb_pendant/side.mov',
      '/pcb_pendant/red_top.jpg',
      '/pcb_pendant/desk_side.jpg',
      '/pcb_pendant/desk_corner.jpg',
      '/pcb_pendant/red_side.jpg',
    ],
    reflection: 'Since Valentine\'s Day is approaching, I decided to design a heart-shaped printed circuit board as both a functional electronic device and a symbolic object. My artistic vision was to merge engineering and emotion, turning a traditionally technical medium into something expressive and meaningful.\n\n At the center of the design, I placed the 555 timer chip. Functionally, it generates the oscillating signal that causes the red LED to blink. Conceptually, I treated the timer chip as the "heart" of the system. Just as a human heart sits at the center of the body and pumps rhythmically to sustain life, the timer sits at the center of the PCB and drives the pulsing light. The blinking red LED represents a heartbeat, reinforcing the connection between electronics and human biology. \n\n I made deliberate layout decisions to support this metaphor. I arranged the PCB vertically so the timer chip would visually occupy the center of the heart shape. I intentionally left the upper left and right lobes of the heart mostly empty. This negative space was an important artistic decision. I didn\'t want the circuitry to overwhelm the shape. Instead, I wanted the form of the heart to remain immediately recognizable and clean. By allowing open copper space, the design feels balanced and less cluttered, emphasizing symbolism over density.\n\n The copper traces also contribute to the aesthetic. The traces resemble veins radiating from the center, further reinforcing the biological metaphor.\n\n Overall, my creative decisions were guided by a larger vision, transforming a simple blinking LED circuit into a symbolic object about life and emotion. The final piece functions technically as a timer circuit, but artistically, it represents a mechanical heart.',
    githubUrl:'https://github.com/saloni-jain-code/pcb-pendant'
  },
  {
    id: 'project-4',
    title: 'Generative Art Battery Installation',
    shortDescription: 'A generative art interpretation of "Yellow" by Coldplay on an ESP-32 display.',
    heroImage: ['/battery_installation/my_esp32.mov', '/battery_installation/installation.mov'],
    detailImages: [
      '/battery_installation/look_at_stars.jpg',
      '/battery_installation/all_things_you_do.jpg',
      '/battery_installation/jumped_across.jpg',
      '/battery_installation/drew_line.jpg',
    ],
    reflection: 'One of my favorite songs is Yellow by Coldplay, and I wanted to create a generative display that visualizes the song in real time. My goal was to sync the lyrics to the correct timestamps so that someone listening to the song could watch the visuals unfold alongside it. More than just showing text, I wanted the piece to capture the mood and emotion of the music.\n\nAlthough I don’t have synesthesia, I associate Yellow with warm, glowing colors, like yellows, oranges, and soft greens. That palette became the foundation of my generative system. Instead of a static background, the display shifts randomly within this color range, giving it a soft, living quality while staying emotionally consistent with the song.\n\nThe opening lyric, “look at the stars, look how they shine for you,” establishes the dreamy and yearning tone that defines the piece. To reflect that imagery, I programmed drifting, randomly moving stars into the background. Their gentle motion reinforces the whimsical atmosphere of the music.\n\nI also made intentional typographic choices. The word “you” appears repeatedly and carries much of the song’s intimacy, so I highlighted it using the complementary color of the background to make it stand out. The word “shine” also appears often, so I created a flickering color effect for each of its letters to echo the glow of stars. I limited these effects to specific words so their emphasis would feel meaningful rather than distracting.\n\nBecause this work was designed for a specific screen, I had to carefully balance animation with readability. Making sure the lyrics were large enough to read, without awkward line breaks or cramped spacing, was a constant adjustment. Layering text over moving stars also required fine-tuning contrast and animation speed so the background enhanced the lyrics instead of overpowering them.\n\nSynchronizing the lyrics with the song was another challenge. I listened to the track repeatedly to refine the timing, since even small delays affected the emotional impact. This process made me realize how important precision is when combining generative visuals with music.\n\nOverall, this project was about translating emotion into motion and color. Every creative decision, such as the warm color palette, the drifting stars, highlighting “you,” and flickering “shine”, was motivated by my desire to reflect the song’s dreamy, sentimental tone. By tailoring the visuals to both the music and the display space, I created a piece that feels personal, immersive, and emotionally aligned with the song.',
    githubUrl: 'https://github.com/saloni-jain-code/generative-art'
  }
];
