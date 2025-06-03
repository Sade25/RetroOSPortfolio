import React from 'react';
import { Laptop } from 'lucide-react';

interface WelcomeModalProps {
  onStart: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onStart }) => {
  return (
    <div className="welcome-modal fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] p-[10vh]">
      <div className="welcome-content bg-white w-full max-w-[400px] rounded-lg overflow-hidden shadow-2xl animate-fadeIn">
        <div className="welcome-header bg-gradient-to-r from-[#3a6ea5] to-[#2a5a85] text-white p-4 text-center">
          <h1 className="text-lg md:text-xl font-bold">Welcome to my Retro OS Portfolio</h1>
        </div>
        <div className="welcome-body p-5 text-center">
          <p className="text-sm mb-2">A unique operating system themed portfolio</p>
          <p className="text-sm mb-3">Keep an eye out for hidden features and easter eggs as you explore!</p>
          <div className="mx-auto my-3 w-14 h-14 bg-[#4a90e2] rounded-full flex items-center justify-center text-white">
            <Laptop size={28} />
          </div>
          <p className="text-sm">Click "Start Experience" to begin your journey</p>
        </div>
        <div className="welcome-footer p-4 flex justify-center">
          <button 
            className="start-btn-large px-6 py-2 bg-gradient-to-b from-[#4a90e2] to-[#1a5ca3] border-none rounded text-white text-sm cursor-pointer font-bold hover:bg-gradient-to-b hover:from-[#5a9ff2] hover:to-[#2a6cb3] transition-all"
            onClick={onStart}
          >
            Start Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;