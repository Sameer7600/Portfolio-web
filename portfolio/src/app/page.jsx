'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HomePage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-12 space-y-32">

      {/* ================= HERO SECTION ================= */}
      <section className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            Sameer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground"
        >
          I’m a <span className="font-semibold">MERN Stack Developer</span> creating
          modern, responsive and elegant web applications with smooth animations.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button asChild size="lg" className="rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-2xl">
            <a href="#contact">Let’s Connect</a>
          </Button>
        </motion.div>

        <motion.img
          src="https://tse3.mm.bing.net/th/id/OIP.kysPdWEmU6OPmOLDxXmsCgHaHa?pid=Api&P=0&h=220"
          alt="Profile"
          className="mt-12 w-48 h-48 rounded-full shadow-xl border-4 border-emerald-500 object-cover mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="max-w-5xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="mt-6 text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          I am passionate about building scalable web apps using{" "}
          <span className="font-semibold">React, Next.js, Node.js, and MongoDB</span>.  
          I love to design smooth UI with animations and bring ideas to life with
          clean code.
        </motion.p>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="max-w-6xl w-full text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {["React", "Next.js", "Node.js", "MongoDB", "TailwindCSS", "Framer Motion"].map(
            (skill, i) => (
              <motion.div
                key={skill}
                className="p-6 rounded-2xl bg-card shadow hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
       
       <section id="projects" className="max-w-6xl mx-auto text-center py-20 px-6">
  <motion.h2
    className="text-3xl md:text-4xl font-bold mb-10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
  >
    Projects
  </motion.h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        title: "E-Commerce Website",
        img: "https://img.freepik.com/premium-vector/ecommerce-project-banner-landing-page-template-website_541075-1532.jpg",
        desc: "A full-stack e-commerce platform with authentication, cart, and payment integration."
      },
      {
        title: "Portfolio Website",
        img: "https://tse3.mm.bing.net/th/id/OIP.UKQTqcuclH5azTtQUoI_-QHaE8?pid=Api&P=0&h=220",
        desc: "A modern developer portfolio with animations and smooth UI design."
      },
      {
        title: "Dashboard UI",
        img: "https://tse4.mm.bing.net/th/id/OIP.oc26_6m323WrKpkJIMpTXAHaFj?pid=Api&P=0&h=220",
        desc: "A responsive admin dashboard with charts, tables, and user management."
      },
      {
        title: "Social Media App",
        img: "https://tse1.mm.bing.net/th/id/OIP.JKbLr51Dc7R62ntMdEYFUwHaFW?pid=Api&P=0&h=220",
        desc: "A MERN-based social app with posts, likes, and real-time chat."
      },
      {
        title: "Blog Platform",
        img: "https://tse4.mm.bing.net/th/id/OIP.9F4suJo3K731tGhymaBuqwHaEK?pid=Api&P=0&h=220",
        desc: "A full-stack blogging platform with rich text editor and SEO optimization."
      },
      {
        title: "Landing Page",
        img: "https://tse3.mm.bing.net/th/id/OIP.RFUUK7R68ObvXEAQ-yERkQHaEo?pid=Api&P=0&h=220",
        desc: "A sleek landing page with smooth scrolling and engaging animations."
      }
    ].map((project, i) => (
      <motion.div
        key={i}
        className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform bg-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2 }}
      >
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-muted-foreground mt-2">{project.desc}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="max-w-4xl text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let’s Connect
        </motion.h2>

        <motion.p
          className="text-lg text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Have a project in mind? Feel free to reach out!
        </motion.p>

        <div className="flex justify-center gap-6">
          <Button asChild>
            <a href="mailto:youremail@gmail.com">
              <Mail className="mr-2 h-5 w-5" /> Email
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://github.com/yourgithub" target="_blank">
              <Github className="mr-2 h-5 w-5" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
