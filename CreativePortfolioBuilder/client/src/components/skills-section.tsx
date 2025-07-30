import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import FloatingSkills from "@/components/floating-skills";

export default function SkillsSection() {
  const sectionRef = useScrollAnimation();
  const skillCategories = [
    {
      icon: Code,
      title: "Languages",
      color: "blue",
      skills: [
        { name: "Java", level: 4 },
        { name: "JavaScript", level: 4 },
        { name: "Angular", level: 4 }
      ]
    },
    {
      icon: Database,
      title: "Databases",
      color: "green",
      skills: [
        { name: "MySQL", level: 4 },
        { name: "SQL Server", level: 4 }
      ]
    },
    {
      icon: Globe,
      title: "Web Tech",
      color: "purple",
      skills: [
        { name: "REST APIs", level: 4 },
        { name: "HTML/CSS", level: 5 },
        { name: "JSP", level: 4 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools",
      color: "cyan",
      skills: [
        { name: "Git", level: 4 },
        { name: "Postman", level: 4 },
        { name: "Jitsi", level: 4 }
      ]
    }
  ];

  const specializations = [
    "Telephony Solutions",
    "PBX Integration", 
    "Emergency Systems",
    "WebRTC",
    "CDR Processing",
    "Real-time Communication"
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", iconText: "text-blue-600", dot: "bg-blue-500" },
      green: { bg: "bg-green-50", iconBg: "bg-green-100", iconText: "text-green-600", dot: "bg-green-500" },
      purple: { bg: "bg-purple-50", iconBg: "bg-purple-100", iconText: "text-purple-600", dot: "bg-purple-500" },
      cyan: { bg: "bg-cyan-50", iconBg: "bg-cyan-100", iconText: "text-cyan-600", dot: "bg-cyan-500" }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  const renderSkillLevel = (level: number, color: string) => {
    const colors = getColorClasses(color);
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot <= level ? colors.dot : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Dynamic 3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-16 w-80 h-80 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full animate-rotate-3d"></div>
        <div className="absolute bottom-16 right-16 w-64 h-64 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full animate-rotate-3d-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full animate-scale-pulse transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Full-stack expertise with focus on enterprise telephony solutions
          </p>
        </div>

        <FloatingSkills />

        {/* Specializations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Specializations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {specializations.map((spec, index) => (
              <Badge key={index} variant="outline" className="px-6 py-3 text-base font-medium bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600">
                {spec}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
