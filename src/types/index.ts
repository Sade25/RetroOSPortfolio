// Window types
export interface Window {
  id: string;
  title: string;
  icon: string;
  isOpen: boolean;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
}

// Desktop icon types
export interface DesktopIconProps {
  id: string;
  icon: string;
  title: string;
  position: {
    top: number;
    left: number;
  };
  onClick: (id: string) => void;
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

// Skill types
export interface Skill {
  name: string;
  level: number;
}

// Experience types
export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

// Social link types
export interface SocialLink {
  platform: string;
  icon: string;
  url: string;
}