'use client'

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen px-6 md:px-12 py-20">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-background/80" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        About <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Me</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Profile / Illustration */}
        <motion.img
          src="https://tse3.mm.bing.net/th/id/OIP.kysPdWEmU6OPmOLDxXmsCgHaHa?pid=Api&P=0&h=220"
          alt="Profile"
          className="w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-emerald-500 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Hello! I’m <span className="font-semibold">Sameer</span>, a passionate{" "}
            <span className="font-semibold">MERN Stack Developer</span> with a
            focus on creating high-quality, responsive, and modern web applications.  
            I enjoy blending beautiful design with powerful functionality.
          </p>

          <h2 className="text-2xl font-bold mb-4">What I Do</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I build full-stack applications using{" "}
            <span className="font-semibold">React, Next.js, Node.js, MongoDB</span>  
            along with TailwindCSS and Framer Motion for sleek UI and animations.
          </p>
        </motion.div>
      </div>

      {/* Skills / Technologies */}
      <section className="mt-20 max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Tech Stack
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {["React", "Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS", "Framer Motion", "Git/GitHub"].map(
            (tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge className="px-4 py-2 text-base rounded-full">{tech}</Badge>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Timeline / Experience */}
      <section className="mt-20 max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {[
            {
              year: "2024 - Present",
              title: "Freelance MERN Developer",
              desc: "Building scalable full-stack apps for clients worldwide."
            },
            {
              year: "2023",
              title: "Frontend Developer Intern",
              desc: "Worked with React, Next.js and TailwindCSS to create responsive UI."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="border-l-4 border-emerald-500 pl-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-muted-foreground">{item.year}</span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
