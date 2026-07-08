export type MediaItem =
  | { type: 'video'; src: string; poster: string }
  | { type: 'image'; src: string; alt: string };

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  tags: string[];
  category: 'featured' | 'research' | 'other';
  links?: { label: string; href: string }[];
  media: MediaItem[];
}

export const projects: Project[] = [
  {
    slug: 'vibe',
    title: 'Vibe',
    tagline: 'Humanoid robots for the home',
    description: [
      "Vibe is a startup I'm building that develops humanoid robots for home use. We started by building humanoids for academic and research use, and have since pushed toward low-cost, general-purpose home robots.",
      'I built a humanoid that walks reliably for under $300 in hardware, and later built a VR teleoperation system for controlling a mobile robot remotely.',
    ],
    tags: ['Startup', 'Humanoid Robotics', 'Teleoperation', 'VR', 'Controls'],
    category: 'featured',
    media: [
      { type: 'video', src: '/videos/vibe/clip-3.mp4', poster: '/images/projects/vibe/clip-3.jpg' },
      { type: 'video', src: '/videos/vibe/clip-4.mp4', poster: '/images/projects/vibe/clip-4.jpg' },
      { type: 'video', src: '/videos/vibe/clip-6.mp4', poster: '/images/projects/vibe/clip-6.jpg' },
      { type: 'video', src: '/videos/vibe/clip-2.mp4', poster: '/images/projects/vibe/clip-2.jpg' },
      { type: 'video', src: '/videos/vibe/clip-1.mp4', poster: '/images/projects/vibe/clip-1.jpg' },
      { type: 'video', src: '/videos/vibe/clip-5.mp4', poster: '/images/projects/vibe/clip-5.jpg' },
      { type: 'video', src: '/videos/vibe/clip-7.mp4', poster: '/images/projects/vibe/clip-7.jpg' },
    ],
  },
  {
    slug: 'table-tennis',
    title: 'Multi-Arm Robot Table Tennis',
    tagline: 'Low-cost real-time collaborative planning for two robot arms playing table tennis',
    description: [
      'Research project (with Rohan Paleja, Purdue SCALE Robotics Lab) investigating whether multiple low-cost robot arms can collaboratively perform a high-speed task like table tennis, without relying on expensive sensors or hardware.',
      'The system perceives the ball with two high-speed cameras running at 200Hz, localizes it via motion segmentation and epipolar geometry, and predicts its flight trajectory with a polynomial fit under an air-drag model. Multi-robot trajectories are generated with collocation MPC, and task allocation is learned by a small neural network that assigns the strike to whichever arm is best positioned while the idle arm avoids the active one.',
      'Presented as a poster at Purdue CS.',
    ],
    tags: ['Robotics', 'MPC', 'Perception', 'Multi-Robot', 'Research'],
    category: 'research',
    links: [],
    media: [
      { type: 'image', src: '/images/me/poster.jpg', alt: 'Presenting the Multi-Arm Robot Table Tennis research poster at Purdue' },
    ],
  },
  {
    slug: 'language-guided-active-sensing',
    title: 'Language-Guided Active Sensing',
    tagline: 'Using language to guide a robot’s active sensing decisions',
    description: [
      'Published research on language-guided active sensing — using natural language instructions to inform how a robot chooses where to look and what to sense next, rather than sensing passively or exhaustively.',
    ],
    tags: ['Research', 'Active Sensing', 'Language Models', 'Robotics'],
    category: 'research',
    links: [{ label: 'arXiv:2402.02308', href: 'https://arxiv.org/abs/2402.02308' }],
    media: [
      { type: 'video', src: '/videos/language-guided-active-sensing/clip-1.mp4', poster: '/images/projects/language-guided-active-sensing/clip-1.jpg' },
    ],
  },
  {
    slug: 'mntfields',
    title: 'mntfields',
    tagline: 'Self-supervised hierarchical robot navigation policy learning using physics priors in unknown environments',
    description: [
      'Published research (with Yuchen Liu, Alexiy Buynitsky, and Ahmed H. Qureshi, Purdue Department of Computer Science) on self-supervised hierarchical navigation policy learning that incorporates physics priors to help a robot navigate unknown environments without relying on hand-labeled supervision.',
    ],
    tags: ['Research', 'Robotics', 'Navigation', 'Self-Supervised Learning'],
    category: 'research',
    links: [{ label: 'arXiv:2510.01519v1', href: 'https://arxiv.org/pdf/2510.01519v1' }],
    media: [
      { type: 'video', src: '/videos/mntfields/clip-1.mp4', poster: '/images/projects/mntfields/clip-1.jpg' },
    ],
  },
  {
    slug: 'aloha-connect-4',
    title: 'Aloha Connect 4',
    tagline: 'A dual-arm robot that plays Connect 4 against you',
    description: [
      'Using the Trossen ALOHA bimanual robot arms to physically play Connect 4, combining vision-language-action (VLA) models with traditional planning and control methods for piece placement.',
    ],
    tags: ['Robotics', 'VLA', 'Manipulation'],
    category: 'other',
    media: [
      { type: 'image', src: '/images/me/lab-arms.jpg', alt: 'Holding the Trossen ALOHA dual-arm robot setup used for Connect 4' },
      { type: 'video', src: '/videos/aloha-connect-4/clip-1.mp4', poster: '/images/projects/aloha-connect-4/clip-1.jpg' },
      { type: 'video', src: '/videos/aloha-connect-4/clip-2.mp4', poster: '/images/projects/aloha-connect-4/clip-2.jpg' },
    ],
  },
  {
    slug: 'robot-dog-connect-4',
    title: 'Robot Dog Connect 4',
    tagline: 'Taking Connect 4 mobile on a quadruped robot',
    description: [
      'An extension of the Aloha Connect 4 project onto a mobile robot dog, using YOLO-based object detection to make piece and board detection more robust to movement and viewpoint changes.',
    ],
    tags: ['Robotics', 'Computer Vision', 'YOLO', 'Quadruped'],
    category: 'featured',
    media: [
      { type: 'image', src: '/images/projects/robot-dog-connect-4-1.jpg', alt: 'Robot dog Connect 4 setup' },
      { type: 'image', src: '/images/projects/robot-dog-connect-4-2.jpg', alt: 'Robot dog Connect 4 setup' },
      { type: 'image', src: '/images/projects/robot-dog-connect-4-3.jpg', alt: 'Robot dog Connect 4 setup' },
      { type: 'video', src: '/videos/robot-dog-connect-4/clip-1.mp4', poster: '/images/projects/robot-dog-connect-4/clip-1.jpg' },
    ],
  },
  {
    slug: 'vr-badminton',
    title: 'VR Badminton',
    tagline: 'Playable badminton, built in VR',
    description: [
      'A VR badminton game/experience, built from scratch — covering racket physics, shuttlecock flight, and player interaction in virtual reality.',
    ],
    tags: ['VR', 'Game Dev', 'Physics'],
    category: 'other',
    media: [
      { type: 'video', src: '/videos/vr-badminton/clip-1.mp4', poster: '/images/projects/vr-badminton/clip-1.jpg' },
    ],
  },
  {
    slug: 'ai-ktv',
    title: 'AI KTV',
    tagline: 'Real-time vocal/instrument separation for home karaoke',
    description: [
      'An AI-powered karaoke system that separates vocals and instruments from any song in real time, so you can sing karaoke to any track at home instead of paying for a KTV room.',
    ],
    tags: ['Audio ML', 'Real-Time Systems'],
    category: 'other',
    media: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
