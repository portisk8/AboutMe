import React from "react";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    {icon}
    <h3 className="text-xl font-bold text-gray-800 my-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default SkillCard;
