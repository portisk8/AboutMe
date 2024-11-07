import React from "react";
import {
  Mail,
  Code2,
  Database,
  Cloud,
  Trophy,
  GraduationCap,
} from "lucide-react";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard from "@/components/SkillCard";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import FloatingChatButton from "@/components/Chat";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FloatingChatButton />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/img1.jpg"
                    alt="Augusto Portillo"
                    width={128}
                    height={128}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    Augusto Emiliano Portillo
                  </h1>
                  <h2 className="text-xl md:text-2xl mb-6">
                    Full Stack Developer | .NET & React Specialist
                  </h2>
                </div>
              </div>
              <p className="text-lg mb-8">
                Passionate about making a difference through efficient and
                innovative software solutions.
              </p>

              <div className="grid grid-cols-2 md:flex md:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="mailto:aportillo.dev@gmail.com"
                  className="flex items-center bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-blue-100 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
                <a
                  href="https://www.linkedin.com/in/augustoportillo"
                  className="flex items-center bg-transparent border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition-colors"
                >
                  <FaLinkedinIn className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/portisk8"
                  className="flex items-center bg-transparent border-2 border-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-800 transition-colors"
                >
                  <FaGithubAlt className="w-5 h-5 mr-2" />
                  Github
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-blue-800 font-bold text-xl mb-4">
                  Core Technologies
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    ".NET",
                    "React.js",
                    "Azure",
                    "TypeScript",
                    "Next.js",
                    "SQL Server",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="bg-blue-50 text-blue-800 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Full Stack Developer (Technical Leader)"
              company="Desarrollos NEA SRL"
              period="2017 - Present"
              description={
                <div>
                  <p className="mb-3">
                    Lead developer specializing in .NET & ReactJs technologies
                    with focus on enterprise solutions.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Led development of web applications, mobile apps, and
                      chatbots using .NET and React ecosystem
                    </li>
                    <li>
                      Implemented CI/CD pipelines in Azure DevOps for
                      streamlined deployments
                    </li>
                    <li>
                      Managed and optimized SQL Server and MySQL databases for
                      improved performance
                    </li>
                    <li>
                      Served as Technical Leader and Scrum Master for multiple
                      project teams
                    </li>
                    <li>
                      Key contributor to digital transformation projects,
                      including digitalization of Provincial Registry records
                    </li>
                  </ul>
                </div>
              }
            />
            <ExperienceCard
              title="Full Stack Developer (Semi Senior)"
              company="CFOTech"
              period="2023 - 2024"
              description={
                <div>
                  <p className="mb-3">
                    Full stack developer focused on modern web applications and
                    DevOps practices.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Developed robust applications using .NET and Next.js with
                      TypeScript
                    </li>
                    <li>
                      Provided expert support and optimization for Azure DevOps
                      workflows
                    </li>
                    <li>
                      Implemented best practices for code quality and testing
                    </li>
                    <li>
                      Collaborated with cross-functional teams to deliver
                      high-quality solutions
                    </li>
                  </ul>
                </div>
              }
            />
            <ExperienceCard
              title="Freelance Full Stack & Chatbot Developer"
              company="Independent Projects"
              period="2022 - Present"
              description={
                <div>
                  <p className="mb-3">
                    Design and development of custom web applications and
                    automation solutions for various clients. Specializing in
                    React, Next.js, and .NET implementations.
                  </p>
                  <p className="font-medium text-gray-800 mb-2">
                    Chatbot Development Expertise:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      Built enterprise chatbots using Microsoft Bot Framework
                      (.NET)
                    </li>
                    <li>
                      Developed Node.js-based chatbots integrated with WhatsApp
                      Business API
                    </li>
                    <li>
                      Implemented custom web chat solutions with real-time
                      communication
                    </li>
                    <li>
                      Created omnichannel bot experiences across multiple
                      platforms
                    </li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SkillCard
              icon={<Code2 className="w-8 h-8 text-blue-600" />}
              title="Frontend"
              skills={[
                "React.js",
                "Next.js",
                "TypeScript",
                "HTML5",
                "CSS3",
                "Tailwind",
              ]}
            />
            <SkillCard
              icon={<Database className="w-8 h-8 text-blue-600" />}
              title="Backend"
              skills={[
                ".NET",
                "C#",
                "Node.js",
                "SQL Server",
                "MySQL",
                "RabbitMQ",
              ]}
            />
            <SkillCard
              icon={<Cloud className="w-8 h-8 text-blue-600" />}
              title="Cloud & DevOps"
              skills={[
                "Azure DevOps",
                "Azure Services",
                "CI/CD",
                "Docker",
                "Cognitive Service",
                "Artificial Intelligence",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            Achievements & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Trophy className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Awards</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-700">
                    1st Place - Rally Latinoamericano de Innovación (2015)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-700">
                    1st Place - Hackathon Express Corrientes (2016)
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Certifications
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-700">
                    Microsoft Certified: Azure AI Fundamentals (AI-900)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-700">
                    Microsoft Certified: Azure IoT Developer Specialty (AZ-220)
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                  <p className="text-gray-700">
                    Scrum Foundation Professional Certificate (SFPC)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
