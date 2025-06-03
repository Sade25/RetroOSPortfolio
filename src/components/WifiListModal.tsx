import React, { useRef, useEffect } from 'react';
import { Wifi, WifiOff } from 'lucide-react';

interface WifiListModalProps {
  onClose: () => void;
}

const WifiListModal: React.FC<WifiListModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const networks = [
    { name: 'I Sense a Connection', strength: 90, secure: true },
    { name: 'Pretty Fly for a Wi-Fi', strength: 75, secure: true },
    { name: 'Router? I Hardly Know Her!', strength: 60, secure: false },
    { name: 'The LAN Before Time', strength: 45, secure: true },
    { name: 'Wi Fight the Feeling', strength: 30, secure: true },
    { name: 'Loading...', strength: 15, secure: false },
  ];

  const getSignalIcon = (strength: number) => {
    if (strength >= 70) return <Wifi className="text-green-500\" size={16} />;
    if (strength >= 40) return <Wifi className="text-yellow-500" size={16} />;
    if (strength > 0) return <Wifi className="text-red-500" size={16} />;
    return <WifiOff className="text-gray-500" size={16} />;
  };

  return (
    <div 
      ref={modalRef}
      className="wifi-list-modal absolute bottom-12 right-12 w-64 bg-[#32323a]/95 rounded-lg overflow-hidden backdrop-blur-md shadow-2xl"
    >
      <div className="wifi-header bg-gradient-to-r from-[#3a6ea5] to-[#2a5a85] text-white p-3">
        <h3 className="text-sm font-semibold">Available Networks</h3>
      </div>
      <div className="wifi-list p-2">
        {networks.map((network, index) => (
          <div
            key={index}
            className="wifi-item flex items-center justify-between p-2 text-white hover:bg-white/10 rounded cursor-pointer transition-colors duration-200"
          >
            <div className="flex items-center gap-2">
              {getSignalIcon(network.strength)}
              <span className="text-sm">{network.name}</span>
            </div>
            {network.secure && (
              <div className="text-xs bg-white/20 px-1.5 py-0.5 rounded">
                🔒
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WifiListModal;