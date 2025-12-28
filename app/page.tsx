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
import { Sun, Moon, Loader2 } from "lucide-react"
import ChatInterface from "@/components/chat-interface"
import AnimatedTitles from "@/components/animated-titles"
import { useToast } from "@/hooks/use-toast"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
            Ikram.dev
          </div>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-300 hover:scale-110 shadow-lg group"
            >
              <div className="items-center justify-center relative w-4 h-4 sm:w-5 sm:h-5">
                <Sun
                  className={`absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 text-amber-500 transition-all duration-500 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
                />
                <Moon
                  className={`absolute inset-0 w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300 transition-all duration-500 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
                />
              </div>
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Link href="#contact" scroll={true} passHref legacyBehavior>
              <Button as="a" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50/50 via-transparent to-blue-50/50 dark:from-violet-950/20 dark:to-blue-950/20"></div>
        <div className="container mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 border border-violet-200/50 dark:border-violet-800/50">
                  <Star className="w-3 h-3 text-violet-600 dark:text-violet-400 mr-1.5 sm:mr-2" />
                  <span className="text-xs font-medium text-violet-700 dark:text-violet-300">
                    Available for new projects
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                  <span className="text-slate-900 dark:text-white">Hello, I'm    </span>
                  <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text">
                    Ikram
                  </span>
                </h1>
                <div className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="mb-2 sm:mb-3">
                    A passionate <AnimatedTitles /> crafting exceptional digital experiences with cutting-edge
                    technologies. <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>I transform complex problems into elegant, scalable solutions using the MERN stack, AI/ML
                    technologies, and modern development practices.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link href="#projects" scroll={true} passHref legacyBehavior>
                  <Button as="a" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                    View My Work
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
                <a
                  href="/FullStack2.pdf" download
                  className="px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium border-2 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-all duration-300 inline-flex items-center rounded-lg bg-white/80 dark:bg-slate-900/80"
                >
                  <Download className="mr-2 w-3 h-3 sm:w-4 sm:h-4" />
                  Download CV
                </a>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 pt-2 sm:pt-3">
                <Link href="https://github.com/mika0663" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/muhammad-ikram-74b38b365/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-lg hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl sm:rounded-2xl blur-xl opacity-20 animate-pulse"></div>
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
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
        className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-500"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              About{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
              Passionate about creating digital experiences that make a difference
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-600 rounded-xl blur-lg opacity-20"></div>
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
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

            <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">My Journey</h3>
                <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
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

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30 border border-violet-100 dark:border-violet-800/30">
                  <div className="text-xl sm:text-2xl font-bold text-violet-600 dark:text-violet-400">5+</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300">Projects Completed</div>
                </div>
                <div className="text-center p-3 sm:p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border border-blue-100 dark:border-blue-800/30">
                  <div className="text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400">1+</div>
                  <div className="text-xs font-medium text-slate-600 dark:text-slate-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              My{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Skills
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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
        className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-500"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              Services I{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Offer
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
              Comprehensive solutions to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                <CardContent className="p-4 sm:p-6">
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
      <section id="certifications" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 transition-all duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              My{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Certifications
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
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
                <CardContent className="p-4 sm:p-6">
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
      <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 transition-all duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              Work{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Experience
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
              My professional journey and career milestones
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  period: "Present",
                  title: "MERN Stack Developer",
                  company: "Wilspun Technical Services",
                  location: "Onsite, Lahore",
                  description: [
                    "Designed and implemented animations for a CRM system to make the navigation seamless",
                    "Implemented Authentication and Authorization on backend using JWT, Bcrypt, Node.js, ensuring user's data security",
                    "Integrated Supabase, PostgreSQL with Drizzle ORM using Session Pooler for secure and scalable database connections",
                    "Built business focused UI for professional environment using React, Material UI",
                    "Implemented payment integrations (e.g., Stripe) for subscription-based platforms, including billing, recurring payments, and webhook handling",
                    "Designed and developed RESTful APIs following scalable and maintainable backend architecture principles",
                    "Integrated third-party services such as OpenAI / Claude AI for context-aware and intelligent application features",
                    "Collaborated effectively in cross-functional teams using Git and GitHub, adhering to structured pull request and code review workflows",
                    "Followed best practices for version control, branching strategies, and collaborative development"
                  ],
                },
                {
                  period: "2023 - 2024",
                  title: "Full Stack Developer",
                  company: "Turing",
                  location: "Remote, Worldwide",
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
                    <div className="flex-shrink-0 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full mt-2 shadow-lg"></div>
                    <div className="ml-4 sm:ml-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-white/20 dark:border-slate-700/50 flex-1">
                      <div className="mb-2 text-xs font-semibold text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/30 px-2 py-1 rounded-full inline-block">
                        {exp.period}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.title}</h3>
                      <p className="text-sm sm:text-base font-medium text-violet-600 dark:text-violet-400 mb-2 sm:mb-3">
                        {exp.company}
                        {exp.location && <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 ml-1 sm:ml-2">• {exp.location}</span>}
                      </p>
                      <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-0.5 sm:space-y-1">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {index < 1 && (
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
        className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm transition-all duration-500"
      >
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              Featured{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Projects
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
              A showcase of my recent work and achievements
            </p>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 pl-2 pr-2 scroll-smooth snap-x snap-mandatory" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgb(196 181 253) transparent' }}>
            <div className="flex-shrink-0 w-2"></div>
            {[
              {
                title: "Converso - AI Powered LMS",
                description:
                  "Converso is an AI-powered Learning Management System (LMS) that enables collaborative learning, real-time chat, personalized content delivery, and seamless integration of AI tutors. Built for scalability and engagement, it supports user roles, project tracking, and analytics.",
                image: "/placeholder.svg?height=240&width=400",
                tags: ["React", "Express", "Tailwind CSS", "Node.js", "MongoDB", "Firebase", "Supabase", "Sentry", "Clerk"],
                colors: [
                  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
                  "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
                  "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                  "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
                  "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
                  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400",
                ],
              },
              {
                title: "Fake News Detection System Using Agentic AI",
                description:
                  "A cutting-edge platform that leverages Agentic AI and NLP to detect fake news in real time. Features include advanced data visualization, explainable AI, multi-source aggregation, and a user-friendly dashboard for monitoring and reporting misinformation.",
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
              {
                title: "Editorial Blog - Modern Blog Platform",
                description:
                  "A modern, full-featured blog application built with Next.js, Supabase, and GraphQL. Features user authentication, post management with CRUD operations, category filtering, pagination, dark mode support, and a beautiful responsive UI. Includes user settings, OTP verification, and Row Level Security for secure data access.",
                image: "/edit.PNG",
                tags: ["Next.js", "TypeScript", "Supabase", "GraphQL", "Apollo Client", "Tailwind CSS", "React Hook Form", "Zod"],
                colors: [
                  "bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400",
                  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
                  "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
                  "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
                  "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
                  "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400",
                  "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-400",
                  "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
                ],
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-full sm:w-96 snap-start overflow-hidden bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 relative overflow-hidden">
                  {index === 2 ? (
                    // Use regular img for Editorial Blog to ensure it loads
                    <img
                      src="/edit.PNG"
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        console.error('Image failed to load:', e.currentTarget.src);
                        // Try lowercase if uppercase fails
                        if (e.currentTarget.src.includes('.PNG')) {
                          e.currentTarget.src = "/edit.png";
                        } else {
                          e.currentTarget.src = "/placeholder.svg";
                        }
                      }}
                    />
                  ) : (
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 384px"
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      unoptimized
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-4 sm:p-6">
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
                  {/* Project action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={
                        index === 0
                          ? "https://github.com/mika0663/SaasLMS"
                          : index === 1
                          ? "https://github.com/mika0663/fndsapp"
                          : "https://github.com/mika0663/Blog_project"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        variant="outline"
                        className="w-full group border-2 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-all duration-300 text-sm py-2"
                      >
                        View Code
                        <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                    <div className="relative flex-1">
                      <a
                        href={
                          index === 0
                            ? "#" // Add Converso live URL here
                            : index === 1
                            ? "#" // Add Fake News Detection live URL here
                            : "https://editorialblogs.vercel.app/" // Editorial Blog live URL
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full ${index < 2 ? "pointer-events-none" : ""}`}
                        tabIndex={index < 2 ? -1 : 0}
                        aria-disabled={index < 2}
                      >
                        <Button
                          variant="outline"
                          className="w-full group border-2 border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-950/50 transition-all duration-300 text-sm py-2 relative"
                        >
                          Visit
                          <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                          {/* Coming Soon overlay for first 2 projects */}
                          {index < 2 && (
                            <span className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-xs font-bold rounded-lg shadow-2xl pointer-events-none" style={{ backdropFilter: 'blur(2px)' }}>
                              Coming Soon
                            </span>
                          )}
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="flex-shrink-0 w-2"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-16 transition-all duration-500">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">
              Get In{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 text-transparent bg-clip-text">
                Touch
              </span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto px-4">
              Ready to start your next project? Let's create something amazing together
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-white/20 dark:border-slate-700/50">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">Contact Information</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "mikram34555@gmail.com", color: "from-violet-500 to-purple-500" },
                    { icon: Phone, label: "Phone", value: "+92 315-0663463", color: "from-blue-500 to-cyan-500" },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Lahore, Pakistan",
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

                
              </div>
            </div>

            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-xl border border-white/20 dark:border-slate-700/50">
              <form
                className="space-y-3 sm:space-y-4"
                onSubmit={async (e) => {
                  e.preventDefault()
                  
                  // Validate form
                  if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
                    toast({
                      title: "Validation Error",
                      description: "Please fill in all fields",
                      variant: "destructive",
                    })
                    return
                  }

                  setIsSubmitting(true)

                  try {
                    const response = await fetch("/api/contact", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(formData),
                    })

                    const data = await response.json()

                    if (!response.ok) {
                      throw new Error(data.error || "Failed to send message")
                    }

                    toast({
                      title: "Message Sent!",
                      description: "Thank you for contacting me. I'll get back to you soon.",
                    })

                    // Reset form
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      message: "",
                    })
                  } catch (error) {
                    toast({
                      title: "Error",
                      description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
                      variant: "destructive",
                    })
                  } finally {
                    setIsSubmitting(false)
                  }
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      First name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })
                      }
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
                      required
                      value={formData.lastName}
                      onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                      }
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
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-slate-800/50 dark:text-white backdrop-blur-sm transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border-t border-white/20 dark:border-slate-800/50 transition-all duration-500">
        <div className="container mx-auto text-center">
          <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 text-transparent bg-clip-text mb-2 sm:mb-3">
            Ikram.dev
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 px-4">
            © {new Date().getFullYear()} All rights reserved. Built with ❤️ and lots of ☕
          </p>
        </div>
      </footer>

      {/* Chat Interface Component */}
      <ChatInterface />
    </div>
  )
}
