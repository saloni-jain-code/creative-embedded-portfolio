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
  },
  {
    id: 'project-5',
    title: 'CIPHER: Interactive Escape Room Puzzle',
    shortDescription: 'Interactive escape room puzzle made with copper tape and capacitive touch sensors on ESP32.',
    heroImage: ['/interactive_device/demo.mp4'],
    detailImages: [
      '/interactive_device/full_setup.jpg',
      '/interactive_device/device.jpg',
      '/interactive_device/step1.png',
      '/interactive_device/step2.png',
      '/interactive_device/step3.png',
      '/interactive_device/step4.png',
    ],
    reflection: 'This project was heavily inspired by an escape room I did with my friends last weekend, where we had to stack translucent cards in different orientations to reveal a hidden four-digit code. I knew I wanted to rebuild it as an interactive installation, where the interface itself felt like part of the puzzle.\n\nThe core concept was tactility. Most digital puzzles live entirely on screen where you click, you tap, you type, but I wanted something where the act of physically touching a surface was the input, so that the interface had a material presence beyond the monitor. Copper tape capacitive pads made that possible.\n\nThe visual language of the interface with monospaced fonts, scan lines, a dark terminal palette, 7-segment display digits was a deliberate choice that replicated the cyber theme of the escape room my friends and I did. The four colored card overlays (red, blue, amber, green) are the only warmth in the whole interface, and only when all four are correctly aligned do they resolve into an actual readable code.\n\nThe stack visualizer is a live composite of all four cards overlaid in real time, which was the key creative decision that made the puzzle work spatially. Rotating any single card immediately updates the composite, so players get constant visual feedback about how close they are without ever being told explicitly what to do.\n\nThe architecture ended up as three layers: an ESP32 handling capacitive touch sensing, a Python bridge forwarding serial commands over WebSocket, and a browser rendering the puzzle logic. Keeping the puzzle in the browser meant I could iterate on the visuals and game logic rapidly without reflashing hardware. The ESP32 just sends simple string commands — ROT, ENT, 1 through 4 — which keeps the firmware minimal and the interesting logic where it\'s easy to change. One decision I\'m glad I made early was building a combined server script that runs the HTTP server and WebSocket bridge in a single process. During development I kept running into browser cache issues when opening the HTML directly as a file:// URL, and juggling multiple terminal windows was error-prone during installation. Collapsing everything into python3 run.py — which also auto-launches the browser — meant the whole installation boots from a single command.\n\nCapacitive touch on copper tape was also noisier than expected. The ESP32\'s built-in touch sensing works well on dedicated PCB pads, but copper tape introduces variability based on pad size, wire length, and how the wires are routed. Long parallel wire runs between pads can capacitively couple and cause ghost triggers where touching one pad occasionally fires another. Separating wires physically and routing them away from each other reduces this significantly.\n\nThis noise shaped several design decisions. I originally had a dedicated SELECT button to cycle between the four puzzle cards, but crosstalk between SELECT and ROTATE made the puzzle nearly unplayable-- sometimes rotating a card would accidentally change selection or vice versa. I eventually removed SELECT entirely and made the puzzle linear: rotate each card in sequence, and once a card is aligned it automatically advances to the next. Losing SELECT actually simplified the interaction and made the puzzle cleaner.\n\nThe digit entry pads had similar problems. Accidental triggers while entering the code made it easy to press the wrong digit, so I added a backspace mapped to holding ENTER and 1 simultaneously. Mode switching had the same issue. Tapping ENTER to switch between puzzle and code mode was too easy to trigger accidentally, so I changed it to a deliberate one-second hold. Exiting code mode requires holding ENTER and 1 together for a second. These combos added physical intentionality that a single tap couldn\'t provide.\n\n I also learned that debounce tuning was critical and hardware-specific. The ESP32 touch interrupt fires on the leading edge of a touch, but a single deliberate touch can generate multiple interrupt events as your finger settles. I started with a 150ms debounce window and had to push it to 500ms before double-fires became rare.\n\nReflecting on the project, I wish I had designed a puzzle that relied less on discrete button presses and more on continuous input. The fundamental challenge with using capacitive copper tape in this manner is that it\'s being asked to behave like a button, which it isn\'t well suited for. I learned that discrete signals require clean edges and capacitive touch on copper tape produces neither reliably.',
    githubUrl: 'https://github.com/saloni-jain-code/interactive-escape-room-puzzle/tree/main'
  }
];
