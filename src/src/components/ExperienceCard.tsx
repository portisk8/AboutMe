import React from "react";
import { Briefcase } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string | React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-start">
      <Briefcase className="w-6 h-6 text-blue-600 mt-1 mr-4" />
      <div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-blue-600 font-medium mb-2">{company}</p>
        <p className="text-gray-600 text-sm mb-3">{period}</p>
        <div className="text-gray-700">
          {typeof description === "string" ? <p>{description}</p> : description}
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceCard;
