import React, { useRef, useState, useEffect } from 'react';
import { Window } from '../types';
import AboutContent from './window-contents/AboutContent';
import ProjectsContent from './window-contents/ProjectsContent';
import SkillsContent from './window-contents/SkillsContent';
import ExperienceContent from './window-contents/ExperienceContent';
import ContactContent from './window-contents/ContactContent';
import TerminalContent from './window-contents/TerminalContent';
import NotepadContent from './window-contents/NotepadContent';
import * as Icons from 'lucide-react';

interface WindowProps {
  window: Window;
  onClose: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
  onFocus: (id: string) => void;
  isActive: boolean;
}

const WindowComponent: React.FC<WindowProps> = ({ 
  window: windowData, 
  onClose, 
  onMove, 
  onFocus,
  isActive 
}) => {
  const { id, title, icon, position, size } = windowData;
  const headerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ElementType;

  const handleMouseDown = (e: React.MouseEvent) => {
    onFocus(id);
    if (headerRef.current && e.target === headerRef.current || headerRef.current?.contains(e.target as Node)) {
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      onMove(id, e.clientX - dragOffset.x, e.clientY - dragOffset.y);
    }
  };

  const handleWindowClick = () => {
    onFocus(id);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const renderContent = () => {
    switch (id) {
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'skills':
        return <SkillsContent />;
      case 'experience':
        return <ExperienceContent />;
      case 'contact':
        return <ContactContent />;
      case 'terminal':
        return <TerminalContent onClose={onClose} />;
      case 'notepad':
        return <NotepadContent />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div 
      className={`window absolute bg-[#f0f0f0]/95 rounded-lg shadow-lg flex flex-col overflow-hidden transition-shadow duration-200 ${isActive ? 'z-20 shadow-xl' : 'z-10'}`}
      style={{ 
        top: position.y, 
        left: position.x,
        width: size.width,
        height: size.height
      }}
      onClick={handleWindowClick}
    >
      <div 
        ref={headerRef}
        className="window-header h-8 bg-gradient-to-b from-[#3a6ea5] to-[#2a5a85] text-white flex items-center px-3 justify-between cursor-move select-none"
        onMouseDown={handleMouseDown}
      >
        <div className="window-title text-sm flex items-center gap-2">
          {IconComponent && <IconComponent size={16} />}
          <span>{title}</span>
        </div>
        <div className="window-controls flex gap-2">
          <button className="window-btn w-5 h-5 rounded-full border-none flex items-center justify-center cursor-pointer text-xs text-gray-700 bg-[#ffc107]">
            <Icons.Minus size={12} />
          </button>
          <button className="window-btn w-5 h-5 rounded-full border-none flex items-center justify-center cursor-pointer text-xs text-gray-700 bg-[#28a745]">
            <Icons.Square size={12} />
          </button>
          <button 
            className="window-btn w-5 h-5 rounded-full border-none flex items-center justify-center cursor-pointer text-xs text-gray-700 bg-[#dc3545]"
            onClick={() => onClose(id)}
          >
            <Icons.X size={12} />
          </button>
        </div>
      </div>
      <div className="window-content flex-grow p-4 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default WindowComponent