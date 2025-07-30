import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Download,
  Printer,
  Home,
} from "lucide-react";
import { Link } from "wouter";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ResumeTemplate() {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById("resume-content");
    if (!element) return;

    try {
      // Hide the action buttons during PDF generation
      const buttons = document.querySelector(".print\\:hidden");
      if (buttons) {
        (buttons as HTMLElement).style.display = "none";
      }

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Anusha_Vernekar_Resume.pdf");

      // Show the buttons again
      if (buttons) {
        (buttons as HTMLElement).style.display = "block";
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      // Fallback to print
      handlePrint();
    }
  };

  return (
    <div className="bg-white text-black min-h-screen border border-gray-300">
      {/* Print/Download Controls - hidden in print */}
      <div className="fixed top-4 right-4 space-x-2 print:hidden z-50">
        <Link href="/">
          <Button variant="outline" size="sm">
            <Home className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
        <Button onClick={handlePrint} variant="outline" size="sm">
          <Printer className="h-4 w-4 mr-2" />
          Print
        </Button>
        <Button onClick={handleDownloadPDF} size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download PDF
        </Button>
      </div>

      <div id="resume-content" className="max-w-4xl mx-auto p-8 print:p-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Anusha Vernekar
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            Java Full Stack Developer
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1" />
              anushavernekar23@gmail.com
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +91-7975470039
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Bengaluru, Karnataka
            </div>
            <div className="flex items-center">
              <Linkedin className="h-4 w-4 mr-1" />
              linkedin.com/in/anusha-vernekar-59043a259
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
            PROFESSIONAL SUMMARY
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Results-driven Java Full Stack Developer with 1.5+ years of
            experience specializing in telephony applications and communication
            systems. Proven track record in developing emergency notification
            systems, call management software, and PBX integrations. Strong
            background in Chemistry with analytical problem-solving skills
            applied to software development. Experienced in Agile methodologies
            and cross-functional team collaboration.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
            TECHNICAL SKILLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  Java
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  JavaScript
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  TypeScript
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Frameworks & Libraries
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  Spring Boot
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  Angular
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Databases</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  MySQL
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  SQL Server
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  REST APIs
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  Git
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  Postman
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  Jitsi
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  Go Autodial
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
            PROFESSIONAL EXPERIENCE
          </h3>

          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold text-gray-900">Software Developer</h4>
                <h5 className="text-gray-700 font-medium">
                  Telesoftlabs Pvt Limited
                </h5>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div>November 2023 – Present</div>
                <div>Bengaluru, Karnataka</div>
              </div>
            </div>

            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>
                Designed and maintained an Emergency Notification System with
                user-friendly GUI and integrated web services, enhancing
                real-time alert capabilities.
              </li>
              <li>
                Contributed to Call Management Software by working on CDR (Call
                Detail Record) parsing, data processing, and analytics reporting
                modules.
              </li>
              <li>
                Contributed to Property Management Systems (PMS) with PBX to
                enable automated guest services like check-ins, check-outs, and
                wake-up calls.
              </li>
              <li>
                Enhanced a Jitsi-based video conferencing platform by
                implementing feature improvements and optimizing performance for
                better user experience.
              </li>
              <li>
                Collaborated closely with QA and DevOps teams to streamline
                CI/CD pipelines, ensuring smooth deployment and consistent test
                coverage.
              </li>
              <li>
                Followed Agile methodologies, participated in sprint planning
                and daily stand-ups, and maintained best coding and version
                control practices.
              </li>
              <li>
                Participated in system architecture planning sessions and
                contributed to technical decision-making for scalable software
                solutions.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
            EDUCATION
          </h3>

          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900">
                  Full Stack Java Development
                </h4>
                <h5 className="text-gray-700">Jspiders Bengaluru</h5>
                <p className="text-sm text-gray-600">
                  Intensive training in Java, Spring Boot, Angular, and database
                  technologies
                </p>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div>2023</div>
              </div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-gray-900">
                  Master of Science in Chemistry
                </h4>
                <h5 className="text-gray-700">Karnataka University</h5>
              </div>
              <div className="text-right text-sm text-gray-600">
                <div>Year of Graduation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
            KEY PROJECTS
          </h3>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-gray-900">
                Emergency Notification System
              </h4>
              <p className="text-gray-700 text-sm mb-1">
                Developed critical alert system with GUI interface and web
                service integration for emergency response teams.
              </p>
              <p className="text-xs text-gray-600">
                Technologies: Java, Spring Boot, Angular, REST APIs
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900">
                Digital Retail Solution with Video Conferencing
              </h4>
              <p className="text-gray-700 text-sm mb-1">
                Built a digital retail solution that enabled real-time customer
                interaction through integrated Jitsi-based video conferencing,
                enhancing virtual sales experiences and customer support
                workflows.
              </p>
              <p className="text-xs text-gray-600">
                Technologies: Java, Angular, Jitsi, WebRTC, REST APIs
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mt-4">
                GoAutoDial Integration
              </h4>
              <p className="text-gray-700 text-sm mb-1">
                Worked on integrating GoAutoDial with telephony systems to
                support call campaign management, agent workflows, and automated
                dialing features for contact center operations.
              </p>
              <p className="text-xs text-gray-600">
                Technologies: Asterisk, GoAutoDial, MySQL, Linux, php
              </p>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
            SPECIALIZATIONS
          </h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-gray-300 text-gray-700">
              Telephony Solutions
            </Badge>
            <Badge variant="outline" className="border-gray-300 text-gray-700">
              PBX Integration
            </Badge>
            <Badge variant="outline" className="border-gray-300 text-gray-700">
              Emergency Systems
            </Badge>
            <Badge variant="outline" className="border-gray-300 text-gray-700">
              WebRTC
            </Badge>
            <Badge variant="outline" className="border-gray-300 text-gray-700">
              CDR Processing
            </Badge>
            <Badge variant="outline" className="border-gray-300 text-gray-700">
              Real-time Communication
            </Badge>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-gray-300 pb-1 mb-3">
            ADDITIONAL INFORMATION
          </h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              Strong analytical background from Chemistry education applied to
              software problem-solving
            </li>
            <li>
              Experience with Agile development methodologies and
              cross-functional team collaboration
            </li>
            <li>
              Proven ability to work on mission-critical applications in
              telecommunications industry
            </li>
            <li>
              Continuous learner with passion for emerging technologies and best
              practices
            </li>
          </ul>
        </section>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          @page {
            margin: 0.5in;
            size: A4;
          }

          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:p-4 {
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
