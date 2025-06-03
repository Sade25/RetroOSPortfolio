import React from 'react';
import * as Icons from 'lucide-react';

interface DesktopIconProps {
  id: string;
  icon: string;
  title: string;
  onClick: (id: string) => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ id, icon, title, onClick }) => {
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ElementType;

  return (
    <div 
      className="desktop-icon w-20 h-20 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 text-white text-shadow text-center p-2 hover:bg-white/30 hover:rounded-md"
      onClick={() => onClick(id)}
    >
      <div className="text-2xl mb-1">
        {IconComponent && <IconComponent size={32} strokeWidth={2.5} className="text-white" />}
      </div>
      <span className="text-xs line-clamp-2">{title}</span>
    </div>
  );
};

export default DesktopIcon;