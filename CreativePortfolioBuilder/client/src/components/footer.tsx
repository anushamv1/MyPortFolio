import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-white">Anusha Vernekar</h3>
            <p className="text-slate-400 mb-6">Java Full Stack Developer specializing in telephony solutions</p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="mailto:anushavernekar23@gmail.com" 
                className="text-slate-400 hover:text-blue-400 transition-colors hover-glow"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500">&copy; 2024 Anusha Vernekar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
