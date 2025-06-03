import React, { useState, useEffect } from 'react';
import OSContainer from './components/OSContainer';
import WelcomeModal from './components/WelcomeModal';
import './index.css';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const startExperience = () => {
    setShowWelcome(false);
  };

  // Set document title
  useEffect(() => {
    document.title = "Sade A. | Software Engineer";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#1a2a6c] flex items-center justify-center">
      <OSContainer />
      {showWelcome && <WelcomeModal onStart={startExperience} />}
    </div>
  );
}

export default App;