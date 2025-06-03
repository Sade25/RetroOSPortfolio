import React, { useState, useEffect } from 'react';
import Desktop from './Desktop';
import Taskbar from './Taskbar';
import { Window } from '../types';

const OSContainer: React.FC = () => {
  const [windows, setWindows] = useState<Window[]>([
    {
      id: 'about',
      title: 'About Me',
      icon: 'UserSquare2',
      isOpen: false,
      position: { x: 100, y: 100 },
      size: { width: 700, height: 500 }
    },
    {
      id: 'projects',
      title: 'Projects Portfolio',
      icon: 'FolderKanban',
      isOpen: false,
      position: { x: 250, y: 100 },
      size: { width: 750, height: 500 }
    },
    {
      id: 'skills',
      title: 'Skills & Expertise',
      icon: 'CodeSquare',
      isOpen: false,
      position: { x: 300, y: 120 },
      size: { width: 600, height: 450 }
    },
    {
      id: 'experience',
      title: 'Work Experience',
      icon: 'Building2',
      isOpen: false,
      position: { x: 200, y: 150 },
      size: { width: 650, height: 480 }
    },
    {
      id: 'contact',
      title: 'Contact Me',
      icon: 'MessageSquare',
      isOpen: false,
      position: { x: 400, y: 150 },
      size: { width: 500, height: 400 }
    },
    {
      id: 'terminal',
      title: 'System Terminal',
      icon: 'Terminal',
      isOpen: false,
      position: { x: 150, y: 150 },
      size: { width: 600, height: 400 }
    },
    {
      id: 'notepad',
      title: 'Notepad',
      icon: 'FileText',
      isOpen: false,
      position: { x: 300, y: 150 },
      size: { width: 400, height: 500 }
    }
  ]);

  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [activeWindow, setActiveWindow] = useState<string | null>(null);
  const [showWifiList, setShowWifiList] = useState(false);

  useEffect(() => {
    // Calculate center position for terminal window
    const container = document.querySelector('.os-container');
    if (container) {
      const containerRect = container.getBoundingClientRect();
      const terminalWindow = windows.find(w => w.id === 'terminal');
      if (terminalWindow) {
        const centerX = (containerRect.width - terminalWindow.size.width) / 2;
        const centerY = (containerRect.height - terminalWindow.size.height) / 2;
        
        setWindows(prevWindows => prevWindows.map(window => 
          window.id === 'terminal' 
            ? { ...window, position: { x: centerX, y: centerY } }
            : window
        ));
      }
    }
  }, []);

  const toggleStartMenu = () => {
    setIsStartMenuOpen(!isStartMenuOpen);
    setShowWifiList(false);
  };

  const toggleWifiList = () => {
    setShowWifiList(!showWifiList);
    setIsStartMenuOpen(false);
  };

  const openWindow = (id: string) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, isOpen: true };
      }
      return window;
    }));
    setActiveWindow(id);
    setIsStartMenuOpen(false);
    setShowWifiList(false);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { ...window, isOpen: false };
      }
      return window;
    }));
    if (activeWindow === id) {
      setActiveWindow(null);
    }
  };

  const moveWindow = (id: string, x: number, y: number) => {
    setWindows(windows.map(window => {
      if (window.id === id) {
        return { 
          ...window, 
          position: { x, y } 
        };
      }
      return window;
    }));
  };

  const focusWindow = (id: string) => {
    setActiveWindow(id);
  };

  return (
    <div className="os-container w-[95vw] h-[90vh] bg-gradient-to-b from-[#1e5799] to-[#207cca] rounded-lg shadow-2xl overflow-hidden flex flex-col relative">
      <Desktop 
        windows={windows} 
        openWindow={openWindow}
        closeWindow={closeWindow}
        moveWindow={moveWindow}
        focusWindow={focusWindow}
        activeWindow={activeWindow}
        isStartMenuOpen={isStartMenuOpen}
        setIsStartMenuOpen={setIsStartMenuOpen}
      />
      <Taskbar 
        windows={windows}
        activeWindow={activeWindow}
        toggleStartMenu={toggleStartMenu}
        isStartMenuOpen={isStartMenuOpen}
        openWindow={openWindow}
        focusWindow={focusWindow}
        showWifiList={showWifiList}
        toggleWifiList={toggleWifiList}
      />
    </div>
  );
};

export default OSContainer;