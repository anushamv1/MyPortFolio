import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import ProjectShowcase from "@/components/project-showcase";

export default function ProjectsSection() {
  const sectionRef = useScrollAnimation();
  
  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-scale-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-56 h-56 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full animate-wave"></div>
        <div className="absolute top-1/2 right-10 w-40 h-40 bg-pink-500/10 rounded-full animate-float"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Innovative telephony solutions that power critical business communications
          </p>
        </div>

        <ProjectShowcase />
      </div>
    </section>
  );
}