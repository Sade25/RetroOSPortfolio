import React from 'react';

const SkillsContent: React.FC = () => {
  const technicalSkills = [
    'Java',
    'Python',
    'JavaScript/TypeScript',
    'C#/C++',
    'Ruby',
    'SQL/MongoDB'
  ];

  const frameworks = [
    'React & Next.js',
    'Node.js & Express',
    'Spring Boot',
    'Ruby on Rails',
    'TensorFlow & OpenCV',
    'Docker & AWS'
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-[#f8f9fa] p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#2a5a85] mb-4 border-b-2 border-[#3a6ea5] pb-1.5">Technical Skills</h3>
          <ul className="skills-list list-none">
            {technicalSkills.map((skill, index) => (
              <li key={index} className="py-2 border-b border-[#eee] last:border-b-0">{skill}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-[#f8f9fa] p-5 rounded-lg">
          <h3 className="text-lg font-semibold text-[#2a5a85] mb-4 border-b-2 border-[#3a6ea5] pb-1.5">Frameworks & Tools</h3>
          <ul className="skills-list list-none">
            {frameworks.map((framework, index) => (
              <li key={index} className="py-2 border-b border-[#eee] last:border-b-0">{framework}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsContent;