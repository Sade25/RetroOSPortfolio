import React from 'react';
import * as Icons from 'lucide-react';
import WifiListModal from './WifiListModal';
import { Window } from '../types';

interface TaskbarProps {
  windows: Window[];
  activeWindow: string | null;
  toggleStartMenu: () => void;
  isStartMenuOpen: boolean;
  openWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  showWifiList: boolean;
  toggleWifiList: () => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ 
  windows, 
  activeWindow, 
  toggleStartMenu, 
  isStartMenuOpen,
  openWindow,
  focusWindow,
  showWifiList,
  toggleWifiList
}) => {
  const openWindows = windows.filter(window => window.isOpen);

  const [time, setTime] = React.useState(new Date());
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleClockClick = () => {
    openWindow('terminal');
  };

  return (
    <div className="taskbar h-10 bg-[#1e1e1e]/85 flex items-center px-3 border-t border-white/10">
      <button 
        className={`start-btn h-8 px-4 ${isStartMenuOpen ? 'bg-gradient-to-b from-[#5a9ff2] to-[#2a6cb3]' : 'bg-gradient-to-b from-[#4a90e2] to-[#1a5ca3]'} border-none rounded text-white flex items-center gap-2 cursor-pointer font-bold`}
        onClick={toggleStartMenu}
      >
        <Icons.LayoutGrid size={18} />
        Start
      </button>

      <div 
        className="notepad-btn ml-2 h-8 px-3 bg-white/10 rounded text-white flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-colors duration-200"
        onClick={() => openWindow('notepad')}
      >
        <Icons.FileText size={16} />
        <span className="text-sm">Notepad</span>
      </div>
      
      <div className="taskbar-apps flex ml-4 gap-1 flex-grow overflow-x-auto">
        {openWindows.map(window => {
          const IconComponent = Icons[window.icon as keyof typeof Icons] as React.ElementType;
          
          return (
            <div 
              key={window.id}
              className={`taskbar-app h-8 px-4 ${activeWindow === window.id ? 'bg-white/30' : 'bg-white/10'} rounded text-white flex items-center gap-2 cursor-pointer text-sm transition-all duration-200 hover:bg-white/20`}
              onClick={() => focusWindow(window.id)}
            >
              {IconComponent && <IconComponent size={16} />}
              <span>{window.title}</span>
            </div>
          );
        })}
      </div>
      
      <div className="system-tray flex items-center gap-3 text-white text-sm">
        <div 
          className="wifi-icon cursor-pointer hover:bg-white/10 p-1.5 rounded transition-colors duration-200 relative"
          onClick={toggleWifiList}
        >
          <Icons.Wifi size={16} />
          {showWifiList && <WifiListModal onClose={toggleWifiList} />}
        </div>
        <div 
          className="cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition-colors duration-200"
          onClick={handleClockClick}
        >
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;