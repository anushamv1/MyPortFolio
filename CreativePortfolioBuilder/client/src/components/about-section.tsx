import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function AboutSection() {
  const sectionRef = useScrollAnimation();
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-purple-500/5 rounded-full animate-pulse-slow"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            From Chemistry labs to coding solutions - a journey of passion and transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-0 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  With a Master's degree in Chemistry, I discovered my true passion lay in creating digital solutions. This career transition led me to intensive full-stack development training at Jspiders Bengaluru, where I mastered Java and Angular technologies.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Today, I'm a dedicated Software Developer at Telesoftlabs, where I've spent 1.5+ years building sophisticated telephony and communication applications that serve critical business needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-emerald-800 to-teal-800 border-0 hover-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
                <p className="text-slate-300 leading-relaxed">
                  I'm passionate about solving complex problems through clean, scalable code. My unique background in Chemistry gives me an analytical mindset that I apply to software architecture and debugging challenges.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Education Card */}
            <Card className="bg-slate-800 border-slate-700 hover-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="text-blue-400 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">Education</h4>
                    <p className="text-slate-300">Academic Foundation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white">Master of Science in Chemistry</h5>
                    <p className="text-slate-300">Karnataka University</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">Full Stack Java Development</h5>
                    <p className="text-slate-300">Jspiders Bengaluru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Role Card */}
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white hover-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                    <Briefcase className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Current Role</h4>
                    <p className="text-white/80">Making Impact</p>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg mb-2">Software Developer</h5>
                  <p className="text-white/90 mb-2">Telesoftlabs Pvt Limited</p>
                  <p className="text-white/80">Nov 2023 – Present</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
