import React, { useState, useEffect, useCallback, useRef } from 'react';

const TerminalContent: React.FC<TerminalContentProps> = ({ onClose }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);

  const terminalLines = [
    '> Initializing RetroOS System Diagnostics...',
    '> Checking system integrity...',
    '> Running memory diagnostics...',
    '> Scanning kernel modules...',
    '> WARNING: Legacy code detected in sector 0x7B',
    '> Analyzing system performance...',
    '> CPU Load: Optimal',
    '> Memory Usage: 42.3%',
    '> Disk Health: 98.7%',
    '',
    '⚡ SYSTEM STATUS REPORT ⚡',
    'All systems operational. RetroOS is running smoothly.',
    'Uptime: 125 days, 14 hours, 23 minutes'
  ];

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const typeNextLine = useCallback(() => {
    if (currentLine < terminalLines.length) {
      setLines(prev => [...prev, terminalLines[currentLine]]);
      setCurrentLine(prev => prev + 1);
      setTimeout(scrollToBottom, 50);
    } else if (currentLine === terminalLines.length) {
      setTimeout(() => {
        onClose('terminal');
      }, 2000);
    }
  }, [currentLine, onClose]);

  useEffect(() => {
    const timer = setTimeout(() => {
      typeNextLine();
    }, currentLine === terminalLines.length - 1 ? 2000 : Math.random() * 300 + 200);

    return () => clearTimeout(timer);
  }, [currentLine, typeNextLine]);

  return (
    <div className="h-full bg-black">
      <div 
        ref={terminalRef}
        className="terminal-content w-full h-full bg-black text-green-500 font-mono p-4 overflow-y-auto scroll-smooth"
      >
        {lines.map((line, index) => (
          <div 
            key={index} 
            className={`terminal-line ${
              line.includes('WARNING') ? 'text-yellow-400' :
              line.includes('ERROR') ? 'text-red-400' :
              line.includes('CRITICAL') ? 'text-orange-500' :
              line.includes('CPU Load') ? 'text-blue-400' :
              line.includes('Memory Usage') ? 'text-purple-400' :
              line.includes('Disk Health') ? 'text-cyan-400' :
              line.includes('⚡') ? 'text-blue-500 font-bold text-xl' :
              ''
            } mb-2`}
          >
            {line}
          </div>
        ))}
        <div className="terminal-cursor animate-pulse">_</div>
      </div>
    </div>
  );
};

export default TerminalContent;