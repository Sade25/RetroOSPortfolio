import React from 'react';
import * as Icons from 'lucide-react';

interface StartMenuProps {
  onSelectItem: (id: string) => void;
}

const StartMenu: React.FC<StartMenuProps> = ({ onSelectItem }) => {
  const menuItems = [
    { id: 'about', title: 'About Me', icon: 'UserSquare2' },
    { id: 'skills', title: 'Skills', icon: 'CodeSquare' },
    { id: 'projects', title: 'Projects', icon: 'FolderKanban' },
    { id: 'experience', title: 'Experience', icon: 'Building2' },
    { id: 'contact', title: 'Contact', icon: 'MessageSquare' },
    { id: 'github', title: 'GitHub', icon: 'Github', external: 'https://github.com' }
  ];

  const handleItemClick = (id: string, external?: string) => {
    if (external) {
      window.open(external, '_blank');
    } else {
      onSelectItem(id);
    }
  };

  return (
    <div className="start-menu absolute bottom-10 left-2.5 w-[240px] bg-[#32323a]/95 rounded-lg z-100 backdrop-blur-md shadow-2xl overflow-hidden">
      <div className="start-menu-header h-12 bg-gradient-to-r from-[#3a6ea5] to-[#2a5a85] text-white flex items-center px-4 text-base font-bold">
        Sade A. | Software Engineer
      </div>
      <div className="start-menu-items p-2 grid grid-cols-2 gap-2">
        {menuItems.map(item => {
          const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ElementType;
          
          return (
            <div 
              key={item.id}
              className="start-menu-item flex flex-col items-center justify-center text-white cursor-pointer p-2 rounded hover:bg-white/10 transition-colors duration-200"
              onClick={() => handleItemClick(item.id, item.external)}
            >
              <div className="text-2xl mb-1">
                {IconComponent && <IconComponent size={24} strokeWidth={2.5} />}
              </div>
              <span className="text-xs text-center line-clamp-1">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartMenu;