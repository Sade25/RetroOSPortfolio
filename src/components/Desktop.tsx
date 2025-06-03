import React from 'react';
import DesktopIcon from './DesktopIcon';
import WindowComponent from './WindowComponent';
import StartMenu from './StartMenu';
import ClockWidget from './ClockWidget';
import { Window } from '../types';

interface DesktopProps {
  windows: Window[];
  openWindow: (id: string) => void;
  closeWindow: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  focusWindow: (id: string) => void;
  activeWindow: string | null;
  isStartMenuOpen: boolean;
  setIsStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Desktop: React.FC<DesktopProps> = ({ 
  windows, 
  openWindow, 
  closeWindow, 
  moveWindow, 
  focusWindow,
  activeWindow,
  isStartMenuOpen,
  setIsStartMenuOpen
}) => {
  const desktopIcons = [
    { id: 'about', icon: 'UserSquare2', title: 'About Me' },
    { id: 'projects', icon: 'FolderKanban', title: 'Projects' },
    { id: 'skills', icon: 'CodeSquare', title: 'Skills' },
    { id: 'experience', icon: 'Building2', title: 'Experience' },
    { id: 'contact', icon: 'MessageSquare', title: 'Contact' }
  ];

  const handleBackgroundClick = () => {
    if (isStartMenuOpen) {
      setIsStartMenuOpen(false);
    }
  };

  return (
    <div 
      className="desktop flex-grow bg-black/70 bg-[url('https://images.pexels.com/photos/1252890/pexels-photo-1252890.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center relative overflow-hidden p-5"
      onClick={handleBackgroundClick}
    >
      {/* Desktop Icons */}
      <div className="desktop-icons-container">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            icon={icon.icon}
            title={icon.title}
            onClick={openWindow}
          />
        ))}
      </div>

      {/* Windows */}
      {windows.map((window) => (
        window.isOpen && (
          <WindowComponent
            key={window.id}
            window={window}
            onClose={closeWindow}
            onMove={moveWindow}
            onFocus={focusWindow}
            isActive={activeWindow === window.id}
          />
        )
      ))}

      {/* Start Menu */}
      {isStartMenuOpen && (
        <StartMenu onSelectItem={openWindow} />
      )}

      {/* Clock Widget */}
      <ClockWidget />
    </div>
  );
};

export default Desktop;