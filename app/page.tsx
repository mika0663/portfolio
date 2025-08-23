"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Code,
  Database,
  Server,
  Layout,
  Globe,
  Smartphone,
  ArrowRight,
  Download,
  Star,
} from "lucide-react"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import ChatInterface from "@/components/chat-interface"
import AnimatedTitles from "@/components/animated-titles"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-all duration-500">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 transition-all duration-500">
        <div className="container mx-auto flex items-center justify-between h-16 px-16">
          <div className="font-medium bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
            Ikram.dev
          </div>
          <div className="p-6 hidden md:flex items-center space-x-6">
            {["Home", "About", "Skills", "Services", "Certifications", "Experience", "Projects", "Contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-slate-700 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-400 transition-all duration-300 font-normal relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ),
            )}
          </div>
          <div className="flex items-center space-x-3">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <div className="items-center justify-center relative w-5 h-5">
                <Sun
                  className={`absolute inset-0 w-5 h-5 text-amber-500 transition-all duration-500 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                />
                <Moon
                  className={`absolute inset-0 w-5 h-5 text-slate-700 dark:text-slate-300 transition-all duration-500 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
                />
              </div>
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-sm px-4 py-2">
              Let's Talk
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
  <section id="home" className="min-h-screen flex items-center px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-transparent to-blue-50/50 dark:from-violet-950/20 dark:to-blue-950/20"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 border border-violet-200/50 dark:border-violet-800/50">
                  <Star className="w-3 h-3 text-violet-600 dark:text-violet-400 mr-2" />
                  <span className="text-xs font-medium text-violet-700 dark:text-violet-300">
                    Available for new projects
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
                  <span className="text-slate-900 dark:text-white">Hello, I'm    </span>
                  <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                     Ikram
                  </span>
                </h1>
                <div className="text-base lg:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="mb-3">
                    A passionate <AnimatedTitles /> crafting exceptional digital experiences with cutting-edge
                    technologies. <br/>
                   I transform complex problems into elegant, scalable solutions using the MERN stack, AI/ML
                    technologies, and modern development practices.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="#projects" scroll={true} passHref legacyBehavior>
                  <Button as="a" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                    View My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="px-6 py-3 text-sm font-medium border-2 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-all duration-300"
                >
                  <Download className="mr-2 w-4 h-4" />
                  Download CV
                </Button>
              </div>
              <div className="flex items-center space-x-4 pt-3">
                <Link href="https://github.com/mika0663" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/muhammad-ikram-74b38b365/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-12 h-12 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  <video
                    src="/a7bd668e8aa3fa7a482d0f76e1c813ed.mp4"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="py-16 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-500"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              About{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">Me</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl blur-lg opacity-20"></div>
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                    <img
                      src="/ui-developer.gif"
                      alt="UI Developer GIF"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full"
                      style={{ display: 'block' }}
                    />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">My Journey</h3>
                <div className="space-y-3 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p>
                    I'm a versatile developer with expertise spanning{" "}
                    <span className="font-semibold text-violet-600 dark:text-violet-400">Full Stack Development</span>,{" "}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">AI Development</span>, and{" "}
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">Machine Learning</span>. I
                    specialize in the MERN stack while also building intelligent applications that leverage the power of
                    artificial intelligence.
                  </p>
                  <p>
                    My journey encompasses traditional web development, modern AI integration, and machine learning
                    implementations. I'm passionate about creating solutions that not only function beautifully but also
                    incorporate smart, data-driven features that enhance user experiences.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring the latest AI/ML research, contributing to
                    open-source projects, experimenting with new frameworks, or sharing knowledge through technical
                    articles and mentoring.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border border-violet-100 dark:border-violet-800/30">
                  <div className="text-2xl font-bold text-violet-600 dark:text-violet-400">5+</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-800/30">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              My{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Skills
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                name: "React",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-6 h-6" />,
                color: "from-blue-200 to-blue-600",
                bg: "bg-blue-50 dark:bg-blue-950/30",
                border: "border-blue-200 dark:border-blue-800/50",
              },
              {
                name: "MongoDB",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-6 h-6" />,
                color: "from-green-400 to-green-600",
                bg: "bg-green-50 dark:bg-green-950/30",
                border: "border-green-200 dark:border-green-800/50",
              },
              {
                name: "Express",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-6 h-6" />,
                color: "from-yellow-200 to-yellow-600",
                bg: "bg-yellow-50 dark:bg-yellow-950/30",
                border: "border-yellow-200 dark:border-yellow-800/50",
              },
              {
                name: "Node.js",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-6 h-6" />,
                color: "from-emerald-200 to-emerald-600",
                bg: "bg-emerald-50 dark:bg-emerald-950/30",
                border: "border-emerald-200 dark:border-emerald-800/50",
              },
              {
                name: "TypeScript",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-6 h-6" />,
                color: "from-purple-200 to-purple-600",
                bg: "bg-purple-50 dark:bg-purple-950/30",
                border: "border-purple-200 dark:border-purple-800/50",
              },
              {
                name: "JavaScript",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-6 h-6" />,
                color: "from-yellow-200 to-yellow-600",
                bg: "bg-yellow-50 dark:bg-yellow-950/30",
                border: "border-yellow-200 dark:border-yellow-800/50",
              },
              {
                name: "Tailwind CSS",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-6 h-6" />, 
                color: "from-sky-200 to-sky-600",
                bg: "bg-sky-50 dark:bg-sky-950/30",
                border: "border-sky-200 dark:border-sky-800/50",
              },
              {
                name: "Next.js",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-6 h-6" />,
                color: "from-orange-200 to-slate-600",
                bg: "bg-slate-50 dark:bg-slate-950/30",
                border: "border-slate-200 dark:border-slate-800/50",
              },
              {
                name: "Python",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-6 h-6" />,
                color: "from-yellow-200 to-yellow-600",
                bg: "bg-yellow-50 dark:bg-yellow-950/30",
                border: "border-yellow-200 dark:border-yellow-800/50",
              },
              {
                name: "TensorFlow",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="w-6 h-6" />,
                color: "from-orange-200 to-orange-600",
                bg: "bg-orange-50 dark:bg-orange-950/30",
                border: "border-orange-200 dark:border-orange-800/50",
              },
              {
                name: "OpenAI API",
                icon: <img src="openai.png" alt="OpenAI API" className="w-6 h-6 bg-teal-400" />, 
                color: "from-teal-200 to-teal-600",
                bg: "bg-teal-50 dark:bg-teal-950/30",
                border: "border-teal-200 dark:border-teal-800/50",
              },
              {
                name: "Scikit-learn",
                icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" alt="Scikit-learn" className="w-6 h-6 bg-white rounded" />,
                color: "from-indigo-200 to-indigo-600",
                bg: "bg-indigo-50 dark:bg-indigo-950/30",
                border: "border-indigo-200 dark:border-indigo-800/50",
              },
            ].map(({ name, icon, color, bg, border }) => (
              <Card
                key={name}
                className={`${bg} ${border} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
              >
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-center text-sm">{name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-500"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Services I{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Offer
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                description:
                  "Custom web applications built with modern technologies to meet your specific business needs. From simple websites to complex web applications.",
                icon: Globe,
                color: "from-violet-500 to-purple-500",
              },
              {
                title: "Database Design",
                description:
                  "Efficient database architecture design and implementation. Ensuring your data is structured, secure, and optimized for performance.",
                icon: Database,
                color: "from-blue-500 to-cyan-500",
              },
              {
                title: "API Development",
                description:
                  "RESTful API design and development for seamless integration between your front-end applications and back-end services.",
                icon: Server,
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Responsive Design",
                description:
                  "Creating websites that look and function beautifully across all devices, from desktops to smartphones.",
                icon: Smartphone,
                color: "from-amber-500 to-orange-500",
              },
              {
                title: "Code Optimization",
                description:
                  "Improving the performance and efficiency of existing applications through code refactoring and optimization.",
                icon: Code,
                color: "from-red-500 to-pink-500",
              },
              {
                title: "AI Integration",
                description:
                  "Integrating artificial intelligence capabilities into web applications, including chatbots, recommendation systems, and intelligent automation.",
                icon: Code,
                color: "from-teal-500 to-cyan-500",
              },
              {
                title: "Machine Learning Solutions",
                description:
                  "Developing custom ML models for data analysis, prediction, and pattern recognition to solve complex business problems.",
                icon: Database,
                color: "from-indigo-500 to-purple-500",
              },
            ].map(({ title, description, icon: Icon, color }) => (
              <Card
                key={title}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 transition-all duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              My{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Certifications
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Professional credentials that validate my expertise and commitment to continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Front-End Professional Certificate",
                issuer: "Meta (Facebook)",
                date: "2023",
                description:
                  "Comprehensive understanding of HTML,CSS and React ecosystem, hooks, state management, and modern patterns.",
                icon: Code,
                color: "from-blue-500 to-cyan-500",
                bg: "bg-blue-50 dark:bg-blue-950/30",
                border: "border-blue-200 dark:border-blue-800/50",
                badge: "Meta",
              },
              {
                title: "Machine Learning Specialization",
                issuer: "Stanford University",
                date: "2023",
                description:
                  "Deep understanding of ML algorithms, neural networks, and practical implementation strategies.",
                icon: Server,
                color: "from-purple-500 to-violet-500",
                bg: "bg-purple-50 dark:bg-purple-950/30",
                border: "border-purple-200 dark:border-purple-800/50",
                badge: "Stanford",
              },
              {
                title: "Prompt Engineering Specialization",
                issuer: "Vanderbilt University",
                date: "2024",
                description:
                  "Specialized training in prompt engineering for large language models, focusing on effective prompt design and optimization for AI systems.",
                icon: Code,
                color: "from-emerald-500 to-teal-500",
                bg: "bg-emerald-50 dark:bg-emerald-950/30",
                border: "border-emerald-200 dark:border-emerald-800/50",
                badge: "Vanderbilt",
              },
            ].map(({ title, issuer, date, description, icon: Icon, color, bg, border, badge }) => (
              <Card
                key={title}
                className={`${bg} ${border} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden`}
              >
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 backdrop-blur-sm">
                    {badge}
                  </span>
                </div>
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white">{title}</h3>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400">{issuer}</p>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-full">
                      {date}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
                  <div className="mt-4 flex items-center text-xs text-slate-500 dark:text-slate-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Verified Credential
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certification Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { number: "3", label: "Certifications", color: "from-violet-500 to-purple-500" },
              { number: "1", label: "AI/ML Credentials", color: "from-emerald-500 to-teal-500" },
              { number: "2024", label: "Latest Certified", color: "from-amber-500 to-orange-500" },
            ].map(({ number, label, color }) => (
              <div
                key={label}
                className="text-center p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`text-2xl font-bold bg-gradient-to-r ${color} text-transparent bg-clip-text mb-2`}>
                  {number}
                </div>
                <div className="text-xs font-medium text-slate-600 dark:text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 transition-all duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Work{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Experience
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              My professional journey and career milestones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  period: "2023 - 2024",
                  title: "Full Stack Developer",
                  company: "Turing",
                  description: [
                    "Led the development of scalable web applications, collaborating with cross-functional teams to deliver high-quality solutions",
                    "Designed and implemented backend systems using Node.js, Express, and MongoDB, ensuring secure and efficient data management",
                    "Built responsive and user-friendly interfaces with React, HTML, and CSS, improving usability and engagement",
                    "Integrated real-time features with WebSockets and WebRTC, enabling seamless communication and collaboration",
                    "Enhanced application functionality and performance using Firebase",
                    "Applied best practices in software architecture, performance optimization, and problem solving to consistently exceed client expectations"
                  ],
                },
              ].map((exp, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 shadow-lg"></div>
                    <div className="ml-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 dark:border-slate-700/50 flex-1">
                      <div className="mb-2 text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded-full inline-block">
                        {exp.period}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                      <p className="text-base font-medium text-violet-600 dark:text-violet-400 mb-3">{exp.company}</p>
                      <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < 2 && (
                    <div className="absolute left-1.5 top-5 w-0.5 h-12 bg-gradient-to-b from-violet-500 to-purple-500 opacity-30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-500"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Projects
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A showcase of my recent work and achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Converso - AI Powered LMS",
                description:
                  "A collaborative task management application with real-time updates, user roles, and project tracking.",
                image: "/placeholder.svg?height=240&width=400",
                tags: ["React", "Express", "Tailwind CSS", "Node.js", "MongoDB", "Firebase"],
                colors: [
                  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
                  "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
                  "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
                ],
              },
              {
                title: "Fake News Detection System Using Agentic AI",
                description:
                  "A comprehensive analytics platform with interactive charts, data visualization, and customizable reports.",
                image: "/placeholder.svg?height=240&width=400",
                tags: ["React", "Node.js", "Agentic AI", "OpenAI", "Python", "Flask", "Generative AI"],
                colors: [
                  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
                  "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                  "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
                  "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
                ],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-2 py-1 text-xs font-medium rounded-full ${project.colors[tagIndex]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group border-2 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-all duration-300 text-sm py-2"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 transition-all duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-3">
              Get In{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Touch
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ready to start your next project? Let's create something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 dark:border-slate-700/50">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "ikram@example.com", color: "from-violet-500 to-purple-500" },
                    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "from-blue-500 to-cyan-500" },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "San Francisco, CA",
                      color: "from-green-500 to-emerald-500",
                    },
                  ].map(({ icon: Icon, label, value, color }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <h4 className="text-base font-semibold mb-3 text-slate-900 dark:text-white">Connect with me</h4>
                  <div className="flex space-x-3">
                    {[
                      { icon: Github, color: "hover:bg-slate-100 dark:hover:bg-slate-700" },
                      { icon: Linkedin, color: "hover:bg-blue-50 dark:hover:bg-blue-950/50" },
                      { icon: FileText, color: "hover:bg-violet-50 dark:hover:bg-violet-950/50" },
                    ].map(({ icon: Icon, color }, index) => (
                      <Button
                        key={index}
                        variant="ghost"
                        size="icon"
                        className={`w-10 h-10 rounded-lg bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm border border-white/20 dark:border-slate-600/50 ${color} transition-all duration-300 hover:scale-110 shadow-lg`}
                      >
                        <Icon className="w-4 h-4" />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20 dark:border-slate-700/50">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      First name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-slate-800/50 dark:text-white backdrop-blur-sm transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      Last name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-slate-800/50 dark:text-white backdrop-blur-sm transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-slate-800/50 dark:text-white backdrop-blur-sm transition-all duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-slate-800/50 dark:text-white backdrop-blur-sm transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-white/20 dark:border-slate-800/50 transition-all duration-500">
        <div className="container mx-auto text-center">
          <div className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text mb-3">
            Ikram.dev
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} All rights reserved. Built with ❤️ and lots of ☕
          </p>
        </div>
      </footer>

      {/* Chat Interface Component */}
      <ChatInterface />
    </div>
  )
}
