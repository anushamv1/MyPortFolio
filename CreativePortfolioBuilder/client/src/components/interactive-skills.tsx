import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Skill {
  name: string;
  level: number;
  category: string;
  experience: string;
  projects: string[];
  color: string;
}

export default function InteractiveSkills() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    {
      name: "Java",
      level: 90,
      category: "Backend",
      experience: "1.5+ years",
      projects: ["Emergency Notification System", "Call Management Software"],
      color: "bg-orange-500",
    },
    {
      name: "Spring Boot",
      level: 85,
      category: "Framework",
      experience: "1+ year",
      projects: ["PBX Integration", "Web Services"],
      color: "bg-green-500",
    },
    {
      name: "JavaScript",
      level: 80,
      category: "Frontend",
      experience: "1+ year",
      projects: ["GUI Development", "Web Applications"],
      color: "bg-yellow-500",
    },
    {
      name: "Angular",
      level: 75,
      category: "Frontend",
      experience: "8 months",
      projects: ["Modern Web Interfaces", "Component Libraries"],
      color: "bg-blue-500",
    },
    {
      name: "MySQL",
      level: 85,
      category: "Database",
      experience: "1+ year",
      projects: ["CDR Analysis", "Data Management"],
      color: "bg-purple-500",
    },
    {
      name: "Asterisk PBX",
      level: 95,
      category: "Telephony",
      experience: "1.5+ years",
      projects: ["Emergency Systems", "Call Routing"],
      color: "bg-red-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skills.map((skill, index) => (
        <Card
          key={skill.name}
          className={`bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
            selectedSkill?.name === skill.name ? "ring-2 ring-blue-500" : ""
          }`}
          onClick={() =>
            setSelectedSkill(selectedSkill?.name === skill.name ? null : skill)
          }
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <Badge variant="secondary" className="text-xs">
                {skill.category}
              </Badge>
            </div>

            {/* Skill level bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm text-slate-300 mb-2">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-slate-600 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width:
                      selectedSkill?.name === skill.name || !selectedSkill
                        ? `${skill.level}%`
                        : "0%",
                  }}
                />
              </div>
            </div>

            <p className="text-slate-400 text-sm mb-3">
              Experience: {skill.experience}
            </p>

            {selectedSkill?.name === skill.name && (
              <div className="mt-4 p-4 bg-slate-800/50 rounded-lg animate-fadeIn">
                <h4 className="text-sm font-medium text-blue-400 mb-2">
                  Featured Projects:
                </h4>
                <ul className="space-y-1">
                  {skill.projects.map((project, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-300 flex items-center"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                      {project}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
