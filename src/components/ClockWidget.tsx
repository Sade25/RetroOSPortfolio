import React, { useState, useEffect } from 'react';

const ClockWidget: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format time and date
  const timeString = dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = dateTime.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div className="clock-widget absolute top-5 right-5 bg-black/50 text-white px-4 py-2.5 rounded font-mono text-sm">
      {timeString} | {dateString}
    </div>
  );
};

export default ClockWidget;