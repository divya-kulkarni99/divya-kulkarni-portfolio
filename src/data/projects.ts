import {
  BrainCircuit,
  FlaskConical,
  Image as ImageIcon,
  Music2,
  Activity,
} from 'lucide-react';

export const projects = [
  {
    name: 'Spotify’s Top 10,000 Streamed Songs',
    description:
      'Performed data analysis on Spotify’s Top 10,000 Streamed Songs dataset using Python libraries and built predictive models including Linear Regression, Decision Tree, and Random Forest.',
    keyFeatures: [
      'Exploratory data analysis with visualizations',
      'Built Linear Regression, Decision Tree, Random Forest',
      'Identified Random Forest as most effective for trend prediction',
    ],
    techStacks: ['Anaconda', 'Scikit-learn', 'NumPy', 'Pandas'],
    icon: Music2,
    gitLink: '',
    liveLink: '',
    bgColor: 'from-amber-500 to-rose-600',
  },
  {
    name: 'NIH Chest X-Ray Disease Detection',
    description:
      'Processed 112,120 chest X-ray images from 30,805 patients with multi-label annotations for 14 thoracic diseases and built TensorFlow models for automated detection.',
    keyFeatures: [
      'Multi-label classification for 14 conditions + No Findings',
      'Large-scale data preprocessing and augmentation',
      'Improved scalability for computer-aided diagnosis',
    ],
    techStacks: ['Python', 'TensorFlow', 'Pandas', 'NumPy'],
    icon: Activity,
    gitLink: '',
    liveLink: '',
    bgColor: 'from-slate-700 to-zinc-900',
  },
  {
    name: 'Handwriting Recognition System',
    description:
      'Built a handwriting recognition system using image processing to detect forgery exam scripts.',
    keyFeatures: [
      'Convolutional model training and evaluation',
      'Image preprocessing and feature extraction',
      'Automation for evaluating 100+ student scripts',
    ],
    techStacks: [
      'TensorFlow',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Anaconda',
    ],
    icon: BrainCircuit,
    gitLink: '',
    liveLink: '',
    bgColor: 'from-indigo-600 to-purple-900',
  },
  {
    name: 'Blood Donation Management System',
    description:
      'Developed a portal for 500+ students and staff to register via QR code and manage donations.',
    keyFeatures: [
      'QR-based registration',
      'Admin donor monitoring',
      'Excel report exports',
    ],
    techStacks: ['HTML5', 'CSS', 'Spring', 'MySQL'],
    icon: FlaskConical,
    gitLink: '',
    liveLink: '',
    bgColor: 'from-emerald-500 to-slate-800',
  },
  {
    name: 'NASA Astronomy Picture of the Day',
    description:
      'Single-page app integrating NASA APOD API to fetch and display daily images with Google OAuth 2.0 auth.',
    keyFeatures: [
      'Google OAuth 2.0 authentication',
      'Daily APOD fetch and archive view',
      'Deployed on Vercel with MongoDB storage',
    ],
    techStacks: [
      'React',
      'Node.js',
      'MongoDB',
      'NASA APOD API',
      'OAuth 2.0',
      'Vercel',
    ],
    icon: ImageIcon,
    gitLink: '',
    liveLink: '',
    bgColor: 'from-cyan-500 to-slate-900',
  },
];
