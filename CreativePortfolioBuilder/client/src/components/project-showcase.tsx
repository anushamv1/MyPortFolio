import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  Phone,
  Video,
  Building,
  ExternalLink,
  Code,
  Users,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  impact: string;
  icon: any;
  color: string;
  category: string;
}

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "emergency",
      title: "Emergency Notification System",
      description:
        "Critical communication system for real-time emergency alerts",
      longDescription:
        "Developed a comprehensive emergency notification system that handles critical communications during crisis events. The system integrates GUI development with web service architecture to provide immediate, reliable alerts to designated personnel and systems.",
      technologies: [
        "Java",
        "Angular",
        "Spring Boot",
        "FreeSwitch",
        "REST APIs",
        "WebSockets",
      ],
      features: [
        "Real-time alert broadcasting",
        "Multi-channel communication (voice, SMS, Whatsapp, Email)",
        "Priority-based message routing",
        "Automated escalation protocols",
        "Integration with FreeSwitch for voice communication",
      ],
      impact:
        "Reduced emergency response time by 40% and increased system reliability to 99.9%",
      icon: AlertTriangle,
      color: "red",
      category: "Emergency Systems",
    },
    {
      id: "pbx-management",
      title: "Call Management Software",
      description:
        "Advanced CDR parsing and analytics platform for PBX systems",
      longDescription:
        "Contributed in developing a sophisticated call management system that processes Call Detail Records (CDR) from PBX systems, providing real-time analytics, call routing optimization, and comprehensive reporting capabilities for enterprise telephony environments.",
      technologies: [".NET", "SQL Server", "SQL Lite", "Crystal reports"],
      features: [
        "Real-time CDR processing",
        "Advanced call analytics and reporting",
        "Automated call routing optimization",
        "Cost analysis and billing integration",
        "Performance monitoring dashboards",
      ],
      impact:
        "Improved call routing efficiency by 35% and reduced operational costs by 25%",
      icon: Phone,
      color: "blue",
      category: "Telephony Analytics",
    },
    {
      id: "hospitality",
      title: "Hospitality Management Integration",
      description:
        "Seamless PMS and PBX integration for automated guest services",
      longDescription:
        "Contributed to the development of solution that connects Property Management Systems (PMS) with PBX infrastructure to automate guest services, including room service requests, wake-up calls, and emergency communications in hospitality environments.",
      technologies: [".NET", "MS SQL", "Mitel PBX", "XML/JSON"],
      features: [
        "Automated guest check-in/out processes",
        "Room service automation",
        "Emergency communication protocols",
        "Guest preference management",
        "Real-time occupancy tracking",
      ],
      impact:
        "Enhanced guest satisfaction scores by 30% and reduced manual processing time by 50%",
      icon: Building,
      color: "green",
      category: "Hospitality Tech",
    },
    {
      id: "video-conferencing",
      title: "Video Conferencing Platform",
      description:
        "Jitsi-based communication solution for enterprise collaboration",
      longDescription:
        "Contributed to the development of a comprehensive video conferencing platform built on Jitsi framework, providing secure, scalable communication solutions for enterprise environments with custom integrations and enhanced security features.",
      technologies: [
        "Angular",
        "Jitsi Meet",
        "WebRTC",
        "Rest APIs",
        "Docker",
        "MYSQL",
      ],
      features: [
        "High-quality video/audio streaming",
        "Screen sharing and collaboration tools",
        "End-to-end encryption",
        "Meeting recording and playback",
        "Custom branding and UI customization",
      ],
      impact:
        "Supported 500+ concurrent users with 99.5% uptime and reduced meeting setup time by 60%",
      icon: Video,
      color: "purple",
      category: "Communication Platform",
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: {
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        text: "text-red-400",
        badge: "bg-red-500/20 text-red-300",
      },
      blue: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300",
      },
      green: {
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        text: "text-green-400",
        badge: "bg-green-500/20 text-green-300",
      },
      purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        text: "text-purple-400",
        badge: "bg-purple-500/20 text-purple-300",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <div className="space-y-8">
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => {
          const colors = getColorClasses(project.color);
          const Icon = project.icon;

          return (
            <Card
              key={project.id}
              className={`bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                selectedProject === project.id
                  ? `ring-2 ${colors.border.replace("border-", "ring-")}`
                  : ""
              }`}
              onClick={() =>
                setSelectedProject(
                  selectedProject === project.id ? null : project.id,
                )
              }
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 ${colors.bg} rounded-lg`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {project.title}
                      </h3>
                      <Badge className={colors.badge}>{project.category}</Badge>
                    </div>

                    <p className="text-slate-300 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      {selectedProject === project.id
                        ? "Hide Details"
                        : "View Details"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Expanded Project Details */}
      {selectedProjectData && (
        <Card className="bg-slate-700/30 border-slate-600 animate-fadeIn">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {selectedProjectData.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProjectData.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-400" />
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProjectData.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-slate-300 text-sm flex items-start"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-green-400" />
                    Impact & Results
                  </h4>
                  <p className="text-green-300 font-medium">
                    {selectedProjectData.impact}
                  </p>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Technology Stack
                </h4>
                <div className="space-y-3">
                  {selectedProjectData.technologies.map((tech) => (
                    <div key={tech} className="bg-slate-800/50 p-3 rounded-lg">
                      <span className="text-slate-200 font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
