import React from 'react';
import { Building2, Code } from 'lucide-react';

const ExperienceContent: React.FC = () => {
  const experiences = [
    {
      company: 'Amazon',
      position: 'Software Development Engineer',
      location: 'Seattle, Washington',
      period: 'January 2025 - Present',
      description: 'Working on the Transportation team to optimize Amazon\'s transportation network.'
    },
    {
      company: 'Amazon',
      position: 'Software Engineering Intern',
      location: 'Seattle, Washington',
      period: 'May 2024 - August 2024',
      description: [
        'Developed a comprehensive Java package and data pipeline that generated cost signals for Amazon\'s transportation network, resulting in a 15% reduction in rerouting and cancellations',
        'Spearheaded the development of a routing algorithm that analyzed cost signals to optimize transportation routes',
        'Engineered cloud infrastructure using AWS services achieving 99.9% pipeline reliability'
      ]
    },
    {
      company: 'Qualcomm',
      position: 'Embedded Software Engineering Intern',
      location: 'San Diego, California',
      period: 'May 2023 - August 2023',
      description: [
        'Improved API performance by implementing a circular buffer solution that reduced median response time by 83%',
        'Engineered optimizations for audio processing algorithms, reducing computational load and memory utilization',
        'Developed proprietary features that eliminated client dependencies on third-party alternatives',
        'Upgraded user interface for PCM sampling and analog signals'
      ]
    },
    {
      company: 'Innovative Systems',
      position: 'Software Engineering Intern',
      location: 'Remote, Virtual',
      period: 'January 2023 - May 2023',
      description: [
        'Led development of Enlighten Profiler used by 300 leading enterprises globally',
        'Implemented comprehensive export feature resulting in 60% reduction in data inconsistency',
        'Architected dashboard interface leading to 22% increase in efficiency'
      ]
    },
    {
      company: 'SAM Companies',
      position: 'Software Engineering Intern',
      location: 'Columbus, Ohio',
      period: 'August 2022 - December 2022',
      description: [
        'Developed "TopoProfile Generator" GIS plugin for enhanced terrain analysis',
        'Designed directional gadgets for 3D application used by field engineers',
        'Spearheaded data analysis by designing and executing database queries across multiple data sources'
      ]
    }
  ];

  return (
    <div className="p-5">
      <div className="experience-list space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-item bg-white p-5 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <Building2 size={24} className="text-[#2a5a85]" />
              <div>
                <h4 className="text-lg font-semibold text-[#2a5a85]">{experience.position}</h4>
                <div className="text-gray-600">
                  {experience.company} | {experience.location}
                </div>
                <div className="text-sm text-gray-500">{experience.period}</div>
              </div>
            </div>
            {Array.isArray(experience.description) ? (
              <ul className="list-disc ml-9 mt-3 space-y-2">
                {experience.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600 ml-9">{experience.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContent;