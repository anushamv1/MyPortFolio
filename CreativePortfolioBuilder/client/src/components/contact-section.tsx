import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, FileText } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Link } from "wouter";

export default function ContactSection() {
  const sectionRef = useScrollAnimation();
  const downloadResume = () => {
    // In a real implementation, this would link to the actual resume file
    const link = document.createElement('a');
    link.href = '/assets/AnushaResume_1751990307946.pdf';
    link.download = 'Anusha_Vernekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/10 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300">Ready to collaborate on innovative software solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, and collaborative partnerships. Whether you're looking for a dedicated full-stack developer or want to explore telephony solutions, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="bg-slate-800 border-slate-700 hover-glow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a href="mailto:anushavernekar23@gmail.com" className="text-blue-400 hover:text-blue-300">
                        anushavernekar23@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 hover-glow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <a href="tel:+917975470039" className="text-blue-400 hover:text-blue-300">
                        +91 7975470039
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 hover-glow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="text-blue-400 h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Location</h4>
                      <span className="text-slate-300">India</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resume Options */}
            <div className="pt-6 space-y-3">
              <Link href="/resume">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow font-medium">
                  <FileText className="mr-2 h-4 w-4" />
                  View Resume
                </Button>
              </Link>
              <Button 
                onClick={downloadResume}
                variant="outline"
                className="w-full border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white py-3 px-6 rounded-lg transition-all duration-300 hover-glow font-medium"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>

          {/* Interactive 3D Visual */}
          <div className="relative">
            <Card className="bg-slate-800 border-slate-700 hover-glow transition-all duration-500 overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                
                {/* 3D-like animated elements */}
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 mx-auto mb-6 relative perspective-1000">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-30 transform rotate-3d"></div>
                      <div className="absolute inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse transform rotate-3d-reverse"></div>
                      <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-glow transform rotate-3d"></div>
                      <div className="absolute inset-6 bg-white rounded-full animate-bounce"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h3>
                    <p className="text-slate-300 mb-6">Let's create something amazing together</p>
                  </div>
                  
                  {/* Floating action buttons */}
                  <div className="space-y-4">
                    <a 
                      href="mailto:anushavernekar23@gmail.com"
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover-glow text-center font-medium transform hover:scale-105"
                    >
                      <Mail className="inline mr-2 h-5 w-5" />
                      Start a Conversation
                    </a>
                    
                    <a 
                      href="tel:+917975470039"
                      className="block w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 px-6 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 hover-glow text-center font-medium transform hover:scale-105"
                    >
                      <Phone className="inline mr-2 h-5 w-5" />
                      Schedule a Call
                    </a>
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60"></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40"></div>
                  <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-glow opacity-50"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}