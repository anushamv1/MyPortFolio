import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Phone, Building, Video, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function ExperienceSection() {
  const sectionRef = useScrollAnimation();
  const achievements = [
    { icon: AlertTriangle, title: "Emergency Notification System", description: "Developed GUI and web service integration for critical alert systems", color: "text-red-500" },
    { icon: Phone, title: "Call Management Software", description: "Built CDR parsing and analytics platform for PBX systems", color: "text-blue-500" },
    { icon: Building, title: "Hospitality Management", description: "Integrated PMS with PBX for automated guest services", color: "text-green-500" },
    { icon: Video, title: "Video Conferencing Platform", description: "Contributed to Jitsi-based communication solutions", color: "text-purple-500" }
  ];

  const trainingTopics = [
    "Java Programming", "Angular Framework", "RESTful APIs", 
    "Database Integration", "Frontend Development", "Deployment"
  ];

  const keyAchievements = [
    "Collaborated with QA and DevOps teams for smooth deployments",
    "Followed Agile methodologies and best coding practices", 
    "Participated in system architecture planning"
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-24 w-60 h-60 bg-gradient-to-r from-orange-500/8 to-red-500/8 rounded-full animate-wave"></div>
        <div className="absolute bottom-24 left-24 w-80 h-80 bg-gradient-to-r from-indigo-500/8 to-blue-500/8 rounded-full animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-44 h-44 bg-gradient-to-r from-green-500/8 to-emerald-500/8 rounded-full animate-scale-pulse"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-slate-300">My professional journey in software development</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-blue-600"></div>

          {/* Current Position */}
          <div className="relative flex items-center mb-16">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
            
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
              <Card className="bg-slate-700 border-slate-600 hover-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-green-700 text-green-200 hover:bg-green-700">Current</Badge>
                    <span className="ml-auto text-slate-400 text-sm">Nov 2023 – Present</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Software Developer</h3>
                  <h4 className="text-lg text-blue-400 font-semibold mb-4">Telesoftlabs Pvt Limited</h4>
                  
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <achievement.icon className={`${achievement.color} mt-1 mr-3 h-5 w-5`} />
                        <div>
                          <h5 className="font-semibold text-white">{achievement.title}</h5>
                          <p className="text-slate-300 text-sm">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-600">
                    <h6 className="font-semibold text-white mb-2">Key Achievements:</h6>
                    <ul className="text-slate-300 text-sm space-y-1">
                      {keyAchievements.map((achievement, index) => (
                        <li key={index}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Education/Training */}
          <div className="relative flex items-center">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-slate-400 rounded-full border-4 border-white shadow-lg z-10"></div>
            
            <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8 md:ml-auto">
              <Card className="bg-slate-700 border-slate-600 hover-glow transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Badge variant="outline" className="border-blue-500 text-blue-400 bg-slate-800">Training</Badge>
                    <span className="ml-auto text-slate-400 text-sm">Before 2023</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">Full Stack Development Training</h3>
                  <h4 className="text-lg text-blue-400 font-semibold mb-4">Jspiders Bengaluru</h4>
                  
                  <div className="space-y-3">
                    <p className="text-slate-300">Intensive training program covering:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      {trainingTopics.map((topic, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="text-green-400 mr-2 h-4 w-4" />
                          <span className="text-slate-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
