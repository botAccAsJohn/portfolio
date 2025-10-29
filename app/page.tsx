"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Calendar, MapPin, Github, Linkedin, Instagram, ExternalLink, Send } from "lucide-react"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("about")
  const [totalVisitors, setTotalVisitors] = useState(472)
  const [activeUsers, setActiveUsers] = useState(1)

  useEffect(() => {
    // Simulate visitor tracking
    const storedVisitors = localStorage.getItem("totalVisitors")
    if (storedVisitors) {
      setTotalVisitors(Number.parseInt(storedVisitors))
    } else {
      localStorage.setItem("totalVisitors", "472")
    }

    // Simulate active users (random between 1-5)
    const randomActiveUsers = Math.floor(Math.random() * 5) + 1
    setActiveUsers(randomActiveUsers)

    // Increment visitor count on page load
    const newVisitorCount = (Number.parseInt(storedVisitors ?? "0") || 472) + 1
    setTotalVisitors(newVisitorCount)
    localStorage.setItem("totalVisitors", newVisitorCount.toString())
  }, [])

  const experiences = [
    {
      title: "Internship",
      company: "IBM AI Basic Certification",
      link: "#",
      date: "November 2024 - January 2025",
      description: "Completed the IBM AI Basic Certification course, gaining a foundational understanding of AI principles and applications.",
    }
  ]

  const skills = [
    {
      name: "Problem Solving",
      icon: "🎯",
      description: "Strong analytical and problem-solving skills with a focus on efficient solutions.",
    },
    {
      name: "Web Development",
      icon: "🌐",
      description: "Expert in MERN stack development, creating responsive and dynamic web applications.",
    },
    {
      name: "Devops",
      icon: "📱",
      description: "Skilled in Devops, creating scalable and efficient web applications.",
    },
    {
      name: "Innovation",
      icon: "💡",
      description: "Constantly learning and implementing new technologies to create better solutions.",
    },
  ]

  const projects = [
    {
      title: "Lets-code",
      description: "Lets-code is a coding platform featuring weekly competitions and logic-based challenges across multiple programming languages. It's built on a microservices architecture for automatic scaling based on traffic, using Next.js, Express, and Judge0 as core technologies. It's built on a microservices architecture for automatic scaling based on traffic, using Next.js, Express, and Judge0 as core technologies",
      tech: ["Next.js", "Express", "Judge0"],
      link: "#",
      image: "🛍️",
    },
    {
      title: "Client-portfolio",
      description:
      "Built with Next.js and modern UI components to showcase work and boost visibility. Includes a contact form that sends user feedback and inquiries directly to the business email.",
      tech: ["Next.js", "Tailwind CSS", "Resend Mailer"],
      link: "https://rkstudio.vinayxdev.me/",
      image: "✅",
    },
  ]

  // Detailed technology skills for the Skills tab
  const techSkills = [
    { name: "React JS", icon: "⚛️" },
    { name: "Express JS", icon: "🧩" },
    { name: "Node JS", icon: "🟢" },
    { name: "Redux", icon: "🌀" },
    { name: "Firebase", icon: "🔥" },
    { name: "Android", icon: "🤖" },
    { name: "Tailwind", icon: "🎋" },
    { name: "Chakra UI", icon: "💠" },
    { name: "Javascript", icon: "🟨" },
    { name: "Wordpress", icon: "📝" },
    { name: "HTML", icon: "📄" },
    { name: "CSS", icon: "🎨" },
    { name: "Socket.IO", icon: "📡" },
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "➕" },
    { name: "C", icon: "🧪" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "MySQL", icon: "🗄️" },
    { name: "Git", icon: "🔧" },
    { name: "GitHub", icon: "🐙" },
    { name: "Postman", icon: "📬" },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
                About Me
                <div className="h-1 w-16 bg-yellow-500 rounded"></div>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  I'm Vinay Keshvala, a final-year B.Tech CSE student at VGEC, Ahmedabad with strong problem-solving skills
                  and a passion for building efficient digital solutions.
                </p>
                <p>
                  I specialize in MERN stack web development and Devops, focusing on
                  creating responsive, user-friendly, and impactful applications.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                What I'm Doing
                <div className="h-1 w-16 bg-yellow-500 rounded"></div>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{skill.icon}</span>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">{skill.name}</h4>
                        <p className="text-gray-400 text-sm">{skill.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case "skills":
        return (
          <div className="space-y-10">
            {/* Skills header */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">Skills</h2>
              <div className="h-1 w-16 bg-yellow-500 rounded"></div>
            </div>

            {/* Skills Grid (pill items similar to screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techSkills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-gray-800/60 border border-gray-700 rounded-xl px-4 py-3 flex items-center gap-3 hover:border-gray-600 transition"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Experience section below the skills grid */}
            <div className="pt-2 space-y-4">
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            {experiences.map((exp, index) => (
              <div
                key={index}
                  className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-1">{exp.title}</h4>
                <a
                  href={exp.link}
                        className="text-yellow-500 font-semibold inline-flex items-center gap-2 hover:text-yellow-400 transition"
                >
                  {exp.company}
                  <ExternalLink className="w-4 h-4" />
                </a>
                    </div>
                    <span className="bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap self-start">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mt-3">{exp.description}</p>
              </div>
            ))}
            </div>
          </div>
        )

      case "projects":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
              Projects
              <div className="h-1 w-16 bg-yellow-500 rounded"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 border border-gray-700 hover:border-yellow-500 transition group"
                >
                  <div className="text-5xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-yellow-500 bg-opacity-20 text-yellow-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="text-yellow-500 font-semibold flex items-center gap-2 hover:text-yellow-400 transition"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )

      case "contact":
        return null

      case "resume":
        return (
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
              Resume
              <div className="h-1 w-16 bg-yellow-500 rounded"></div>
            </h2>

            {/* PDF Viewer Container (embedded from public/test.pdf) */}
            <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
              {/* Toolbar */}
              <div className="bg-gray-800 px-6 py-3 border-b border-gray-700 flex items-center justify-between">
                <div className="text-gray-400 text-sm">Resume</div>
                <a
                  href="/test.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 text-sm font-semibold hover:text-yellow-400"
                >
                  Open in new tab
                </a>
              </div>
              <div className="h-[600px]">
                <iframe
                  src="/test.pdf"
                  title="Resume PDF"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="h-screen overflow-hidden bg-black p-6 flex items-center justify-center">
      <div className="max-w-7xl mx-auto h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full min-h-0 items-stretch">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 h-full">
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 h-full max-h-[820px] flex flex-col overflow-hidden">
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 bg-gray-700 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img src="/name.jpg" alt="Profile photo" className="w-full h-full object-cover" />
                </div>
              </div>

              <h1 className="text-3xl font-bold text-white text-center mb-2">Vinay Keshvala </h1>
              <p className="text-gray-400 text-center mb-8">Software Developer</p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-gray-500 text-sm">Keshavalavinay9040@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-gray-500 text-sm">+91 9106114713</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Birthday</p>
                    <p className="text-gray-500 text-sm">Oct 4th, 2004</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-500 text-sm">Ahmedabad</p>
                    <p className="text-gray-500 text-sm">Gujarat, India</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-6 mb-8 pt-6 border-t border-gray-700">
                <a href="https://github.com/Vinay9040" className="text-gray-400 hover:text-white transition">
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/keshvala-vinay-397229325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-gray-400 hover:text-white transition"
                >
                  <Linkedin className="w-6 h-6" />
                </a>              
              </div>            
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 h-full min-h-0">
            {/* Navigation */}
            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl border border-gray-700 mb-6 h-full max-h-[820px] flex flex-col overflow-hidden min-h-0">
              <div className="flex items-center justify-between px-8 py-4 border-b border-gray-700">
                <nav className="flex gap-6 ml-auto">
                  {[
                    { id: "about", label: "About" },
                    { id: "skills", label: "Skills" },
                    { id: "projects", label: "Projects" },
                    { id: "resume", label: "Resume" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`transition ${
                        activeTab === tab.id
                          ? "text-white bg-yellow-500 px-3 py-1 rounded font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Dynamic Content */}
              <div className="p-8 flex-1 overflow-y-auto">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact section moved outside the right panel */}
      
    </div>
  )
}
