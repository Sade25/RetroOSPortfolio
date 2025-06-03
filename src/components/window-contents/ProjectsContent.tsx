import React from 'react';
import { Cctv, Presentation, Bot } from 'lucide-react';

const ProjectsContent: React.FC = () => {
  const projects = [
    {
      id: 'intrusion',
      title: 'Real-time Intrusion Detection System',
      description: 'AI-powered security system utilizing TensorFlow for intruder detection in live video streams with real-time email alerts for off-hour breaches.',
      icon: <Cctv size={48} />,
      tags: ['Python', 'TensorFlow', 'OpenCV', 'SMTP']
    },
    {
      id: 'presentation',
      title: 'Peer Presentation Evaluator',
      description: 'Full-stack MVC application enabling instructors to create presentations and students to provide peer feedback, with secure user authentication and admin privileges.',
      icon: <Presentation size={48} />,
      tags: ['Ruby on Rails', 'SQLite', 'JavaScript', 'Bootstrap']
    },
    {
      id: 'tradingbot',
      title: 'Discord Trading Bot',
      description: 'Suite of Discord bots serving 5,000+ traders with real-time stock data, market analysis, and automated notifications for potential trades.',
      icon: <Bot size={48} />,
      tags: ['Java', 'Discord API']
    }
  ];

  return (
    <div className="project-grid grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map(project => (
        <div key={project.id} className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1">
          <div className="project-image h-[150px] bg-gradient-to-br from-[#3a6ea5] to-[#2a5a85] flex items-center justify-center text-white">
            {project.icon}
          </div>
          <div className="project-content p-4">
            <h4 className="text-lg font-semibold text-[#2a5a85] mb-2">{project.title}</h4>
            <p className="text-gray-600 text-sm">{project.description}</p>
            <div className="project-tags flex flex-wrap gap-1.5 mt-3">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag bg-[#e9ecef] px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContent;