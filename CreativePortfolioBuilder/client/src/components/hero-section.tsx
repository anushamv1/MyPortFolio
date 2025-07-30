import { Button } from "@/components/ui/button";
import TypewriterText from "@/components/typewriter-text";
import { ArrowRight, Mail, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
        <div className="animate-slideInUp">
          {/* Professional headshot placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl animate-float animate-glow">
            AV
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">Anusha</span>
            <span className="block text-blue-400">Vernekar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-300 mb-4 font-medium">
            <TypewriterText 
              texts={[
                "Java Full Stack Developer",
                "Telephony Systems Expert", 
                "Problem Solver",
                "Innovation Enthusiast"
              ]}
              speed={120}
            />
          </p>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Transforming complex telephony challenges into elegant software solutions with 1.5+ years of experience in enterprise applications
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover-glow"
            >
              <span>View My Work</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover-glow"
            >
              <span>Get In Touch</span>
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
            <a 
              href="mailto:anushavernekar23@gmail.com" 
              className="flex items-center hover:text-blue-400 transition-colors hover-glow"
            >
              <Mail className="mr-2 h-4 w-4" />
              anushavernekar23@gmail.com
            </a>
            <a 
              href="tel:+917975470039" 
              className="flex items-center hover:text-blue-400 transition-colors hover-glow"
            >
              <Phone className="mr-2 h-4 w-4" />
              +91 7975470039
            </a>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full animate-glow"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-cyan-400 rounded-full animate-float animate-glow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-emerald-400 rounded-full animate-glow"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-5 h-5 bg-pink-400 rounded-full animate-float"></div>
      </div>
    </section>
  );
}
