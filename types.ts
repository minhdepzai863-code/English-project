import { LucideIcon } from 'lucide-react';

export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string; // Tailwind gradient classes
  content: React.ReactNode;
}

export interface StatData {
  name: string;
  value: number;
  label: string;
}

export enum AiDomain {
  NLP = 'Natural Language Processing',
  CV = 'Computer Vision',
  ML = 'Machine Learning',
  Robotics = 'Robotics'
}
